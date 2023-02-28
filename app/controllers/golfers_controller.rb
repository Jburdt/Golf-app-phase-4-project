class GolfersController < ApplicationController
  skip_before_action :authorize, only: [:create, :show]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    golfers = Golfer.all
    render json: golfers
  end

  #/signup & logging in 
  def create
    golfer = Golfer.create!(golfer_params)
    session[:golfer_id] = golfer.id
    render json: golfer, status: :created
  end

  #Shows existing user/ stays logged in
  def show
    render json: @current_golfer
  end

  private 
  #Golfer permitted params
  def golfer_params
    params.permit(:username, :password)
  end

  # INVALID DATA RESPONSE
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages  }, status: :unprocessable_entity
  end

end

# WHY CAN'T I GET TO /GOLFERS 