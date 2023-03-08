class SessionsController < ApplicationController
  skip_before_action :authorize

  #Storing which golfer is currently logged in
  def create
    user = user.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: { "Invalid username or password" }}, status: :unauthorized
    end
  end

  #Logout user
  def destroy
    session.delete :user_id
    head :no_content
  end

end

