class TeeTimeSerializer < ActiveModel::Serializer
  # attributes :id, :golfer_id, :course_id, :time { object.time.strftime("%i:%m:%p") }
  attributes :id, :golfer_id, :course_id, :time_format

  def time_format
  object.time.strftime("%H:%M")
  end
  
end
