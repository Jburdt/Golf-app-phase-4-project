class TeeTimesController < ApplicationController

  #gets all teetimes
  def index
    teetimes = TeeTime.all 
    render json: teetimes
  end

  def create
    t_time = TeeTime.create!(tt_params)
    render json: t_time, status: :created
  end

  private

  #Tee Time params
  def tt_params 
    params.permit(:time)
  end

end
