class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  #Storing which golfer is currently logged in
  def create
    golfer = Golfer.find_by(username: params[:username])
    if golfer&.authenticate(params[:password])
      session[:golfer_id] = golfer.id
      render json: golfer, status: :created
    else
      render json: { errors:  ["Invalid username or password"] }, status: :unauthorized
    end
  end

  #Logout golfer
  def destroy
    session.delete :golfer_id
    head :no_content
  end

end

