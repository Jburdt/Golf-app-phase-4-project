Rails.application.routes.draw do
  resources :courses
  resources :tee_times, except: [:show]
  resources :golfers
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "golfers#create"
  get "/me", to: "golfers#show"

  get "/users/:user_id/top_tee_times", to: "tee_times#top_tee_times"
end