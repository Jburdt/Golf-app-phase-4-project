class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authorize

  # private

  # def authorize
  #   @current_golfer = Golfer.find_by(id: session[:golfer_id])
  #   render json: { errors:  ["Must be logged in"] }, status: :unauthorized unless @current_golfer
  # end
 
end
