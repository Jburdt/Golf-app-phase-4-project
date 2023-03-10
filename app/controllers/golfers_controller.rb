class GolfersController < ApplicationController
  skip_before_action :authorize, only: [:create]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # Renders all Golfers
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
    @golfer = Golfer.find_by(id: session[:golfer_id])
    render json: @golfer
  end

  #Deletes golfer
  def destroy
    @golfer = find_golfer
    @golfer.destroy
    head :no_content
  end

  #Patch Updates golfer params
  def update
    @golfer = find_golfer
    @golfer.update(golfer_params)
    render json: @golfer
  end

  private 
  #Finds golfer by ID
  def find_golfer
    @golfer = Golfer.all.find(params[:id])
  end

  #Golfer permitted params
  def golfer_params
    params.permit(:username, :password, :name)
  end

  # INVALID DATA RESPONSE
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end