Rails.application.routes.draw do
  resources :courses, only: [:index, :show]
  resources :tee_times
  resources :golfers, only: [:index]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "golfers#create"
  get "/me", to: "golfers#show"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
