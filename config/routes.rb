Rails.application.routes.draw do
  get 'static/pages'
  resources :champions, only: [:index]
  resources :champion_comments, only: [:index, :show, :create, :update, :destroy]
  resources :user_posts, only: [:index, :create, :destroy]
  resources :post_comments, only: [:create, :destroy, :update]
  resources :capstone_users, only: [:update, :destroy]
  get "/me", to: "capstone_users#show"
  post "/signup", to: "capstone_users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '*path', to: 'static#index', constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
