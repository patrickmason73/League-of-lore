Rails.application.routes.draw do
  resources :champions, only: [:index, :show]
  resources :champion_comments, only: [:index, :show, :create, :update, :destroy]
  resources :user_posts, only: [:index, :create, :destroy]
  resources :post_comments, only: [:create, :destroy, :update]
  get "/me", to: "capstone_users#show"
  post "/signup", to: "capstone_users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
