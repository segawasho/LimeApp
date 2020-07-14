Rails.application.routes.draw do
  get 'order/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'products#index'
  resources :products
  get '/products/:id/buy' => 'products#buy'
  post '/products/:id/pay' => 'products#pay'
  get '/notation' => 'products#notation'
  get '/orders/index' => 'order#index'
  get '/orders/:id/show' => 'order#show'
  post '/orders/:id/destroy' => 'order#destroy'
  devise_for :users
end
