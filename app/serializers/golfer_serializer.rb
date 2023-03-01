class GolferSerializer < ActiveModel::Serializer
  attributes :id, :name, :username

  has_many :tee_times
end
