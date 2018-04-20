Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/home' => 'homes#index'
  get '/pricing' => 'homes#index'
  get '/photo' => 'homes#index'
  get '/contact' => 'homes#index'

end
