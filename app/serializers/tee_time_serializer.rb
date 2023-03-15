class TeeTimeSerializer < ActiveModel::Serializer
  attributes :id, :golfer_id, :course_id, :time
end
