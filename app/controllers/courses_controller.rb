class CoursesController < ApplicationController
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

  private
  def find_course
    Course.all.find(params[:id])
  end

end
