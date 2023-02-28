class Course < ApplicationRecord
  has_many :tee_times
  has_many :golfers, through: :tee_times
  validates :name, presence: true, uniqueness: true
  validates :address, presence: true, uniqueness: true
end
