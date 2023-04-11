class TeeTimeSerializer < ActiveModel::Serializer
  attributes :id, :golfer_id, :course_id, :time_format

  belongs_to :golfer

  def time_format
    object.time.strftime("%I:%M %P")
  end

end
