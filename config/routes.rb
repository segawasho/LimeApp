Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'products#index'
  resources :products
  get '/products/:id/buy' => 'products#buy'
  post '/products/:id/pay' => 'products#pay'
  devise_for :users
end
