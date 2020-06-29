class OrderController < ApplicationController
  #adminユーザのみ閲覧できるページの設定↓
  before_action :if_not_admin

  def index
    @orders = Order.all.order(created_at: :desc)
  end

  private
  def if_not_admin
    redirect_to root_path, notice:'権限がありません' unless current_user.admin?
  end
end
