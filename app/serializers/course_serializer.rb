class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :cost, :image, :final_score

  has_many :tee_times
end
