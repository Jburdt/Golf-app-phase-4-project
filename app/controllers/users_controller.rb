class UsersController < ApplicationController
  # skip_before_action :authorize

  #/Signup NOT NEEDED I CREATE A NEW PERSON IN THE GOLFER CONTROLLER
  
  # def create
  #   user = User.create!(user_params)
  #   session[:user_id] = user.id
  #   render json: user, status: :created
  # end
  
  # private
  # def user_params
  #   params.permit(:username, :password)
  # end

end