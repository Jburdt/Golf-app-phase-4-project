class TeeTimesController < ApplicationController
  skip_before_action :authorize, only: [:index, :number]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  #gets all teetimes
  def index
    teetimes = TeeTime.all 
    render json: teetimes
  end

  #creates new teetime
  def create
    t_time = @current_golfer.tee_times.create!(tt_params)
    render json: t_time, status: :created
  end

  # Updates params
  def update 
    @t_time = find_ttimes
      if t_time.golfer_id == @current_golfer.id
        @t_time.update!(tt_params)
        render json: @t_time
      else
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end
  end

  # #Delete teetime
  # def destroy
  #   @t_time = find_ttimes
  #   @t_time.destroy
  #   head :no_content
  # end

  def number
    most_times = Course.all.select { |course| course.tee_times.length >= params[:n].to_i }
    render json: most_times
  end

  private

  #Tee Time params
  def tt_params 
    params.permit(:time, :course_id)
  end

  # Finds ttime 
  def find_ttimes
    TeeTime.all.find(params[:id])
  end

   # INVALID DATA RESPONSE
   def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end