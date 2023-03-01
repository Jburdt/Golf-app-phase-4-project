class TeeTimesController < ApplicationController

  #gets all teetimes
  def index
    teetimes = TeeTime.all 
    render json: teetimes
  end

  #creates new teetime
  def create
    t_time = TeeTime.create!(tt_params)
    render json: t_time, status: :created
  end

  # Updates params
  def update 
    @t_time = find_ttimes
    @t_time.update!(tt_params)
    render json: @t_time
  end

  private

  #Tee Time params
  def tt_params 
    params.permit(:time, :golfer_id, :course_id)
  end

  # Finds ttime 
  def find_ttimes
    TeeTime.all.find(params[:id])
  end

end
