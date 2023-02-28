class GolfersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  skip_before_action :authorize, only: :create

  def index
    golfers = Golfer.all
    render json: golfers
  end

  def create
    golfer = Golfer.create!(golfer_params)
    session[:golfer_id] = golfer.id
    render json: golfer, status: :created
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
