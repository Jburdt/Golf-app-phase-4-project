class TeeTimeSerializer < ActiveModel::Serializer
  attributes :food_rating, :drink_rating, :greens, :golfer_id, :course_id, :time
end
