class ProductsController < ApplicationController
  #adminユーザのみ閲覧できるページの設定↓
  before_action :if_not_admin, only: [:new,:create, :show, :edit,:update, :destroy]

  def index
    @products = Product.all
    @user = current_user
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to root_path, notice:'商品を登録しました'
    else
      render :new
    end
  end

  def edit
    @product = Product.find_by(id: params[:id])
  end

  def show
    @product = Product.find_by(id: params[:id])
    @user = current_user
  end

  def update
    @product = Product.find_by(id: params[:id])
    @product.update_attributes(product_params)
    if @product.save
      redirect_to root_path, notice:'商品を編集しました'
    else
      render :edit
    end
  end

  def destroy
    @product = Product.find_by(id: params[:id])
    @product.destroy
    flash[:notice] = "削除しました。"
    redirect_to("/")
  end


  def buy
    @product = Product.find_by(id: params[:id])
  end

  def pay
    @product = Product.find_by(id: params[:id])
    Payjp.api_key = ENV['PAYJP_PRIVATE_KEY']
    Payjp::Charge.create(
      :amount => @product.price,
      :card => params['payjp-token'],
      :currency => 'jpy'
    )
    @order = Order.new(
      user_id: current_user.id,
      product_id: params[:id]
    )
    @order.save
    redirect_to root_path, notice:'購入しました'
  end


  private
  def product_params
    params.require(:product).permit(:title,:description,:image_name,:price,:stock_quantity)
  end

  def if_not_admin
    redirect_to root_path, notice:'権限がありません' unless current_user.admin?
  end

end
