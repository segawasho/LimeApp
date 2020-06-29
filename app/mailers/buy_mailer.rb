class BuyMailer < ApplicationMailer


    def send_when_buy(user, product) #メソッドに対して引数を設定
      @user = user
      @product = product
      mail to: @user.email, subject: '【LIME】 ご購入頂き、ありがとうございます。'
    end

    def send_when_buy_admin(admin_user, user, product)
      @admin_user = admin_user
      @user = user
      @product = product
      mail to: @admin_user.email, subject: '【LIME】商品が購入されました。'
    end

end
