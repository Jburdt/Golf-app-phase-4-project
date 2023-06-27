Rails.application.routes.draw do
  resources :courses
  resources :tee_times, except: [:show]
  resources :golfers
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "golfers#create"
  get "/me", to: "golfers#show"

  get '/courses/tee_times/:n', to: "tee_times#number"
get '/courses/name/:n', to: "courses#name_length"
end