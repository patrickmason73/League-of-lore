Rails.application.routes.draw do
  resources :champions, only: [:index, :show]
  resources :champion_comments, only: [:index, :show, :create, :update, :destroy]
  get "/me", to: "capstone_users#show"
  post "/signup", to: "capstone_users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/search", to: "champions#search"
end
