class GolferSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :username

  has_many :tee_times
end
