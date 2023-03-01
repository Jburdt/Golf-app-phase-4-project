Rails.application.routes.draw do
  resources :courses, only: [:index, :show, :create, :update]
  resources :tee_times, except: [:show]
  resources :golfers
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "golfers#create"
  get "/me", to: "golfers#show"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end


# or create a new create method in sessions for a new golfer?
# Sessions only keeps track of login/ logout / signup so I stll need to make all CRUD in needed controllers
# WHY is the password null?
# teetime table should just be time
# should not need to see a show route in tee_time because you see them with the golfer?
# why are my associated data working without a includes :teetimes 