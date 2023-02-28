class CourseSerializer < ActiveModel::Serializer
  attributes :name, :address, :state, :cost, :image, :final_score
end
