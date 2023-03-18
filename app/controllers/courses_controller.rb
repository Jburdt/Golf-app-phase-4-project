class CoursesController < ApplicationController
  # skip_before_action :authorize, only: [:index]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  #GET /courses
  def index
    courses = Course.all 
    render json: courses
  end

  #Get /courses/:id
  def show
    course = find_course
    render json: course
  end

  #Create /courses
  def create
    course = Course.create!(course_params)
    render json: course, status: :created
  end

  #Updates course 
  def update
    @course = find_course
    @course.update!(course_params)
    render json: @course
  end

  # Destroys course
  def destroy
    @course = find_course
    @course.destroy
    head :no_content
  end

  private
  # finds course by :id
  def find_course
    Course.all.find(params[:id])
  end

  #course strong params
  def course_params
    params.permit(:name, :address, :cost, :image)
  end

  # INVALID DATA RESPONSE
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  # def authorize
  #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :golfer_id
  # end

end