class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :state, :cost, :image, :final_score

  has_many :tee_times
end
