Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root 'homes#index'

  get '/home' => 'homes#index'
  get '/pricing' => 'homes#index'
  get '/photo' => 'homes#index'
  get '/contact' => 'homes#index'

  scope '/api' do
    resources :costumers, only: [:index, :create, :destroy, :update]
    resources :pictures, only: [:index, :create, :destroy, :update]
  end
end
