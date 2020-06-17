Rails.application.routes.draw do
  devise_for :users
  #get 'welcome/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #root to: redirect('/welcome')
  root to: "welcome#index"
  get 'welcome', to: 'welcome#index'

  namespace :api do
    resources :favorites
  end
end
