class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :cost, :image

  has_many :tee_times
end
