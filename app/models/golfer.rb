class Golfer < ApplicationRecord
  has_secure_password
  has_many :tee_times
  has_many :courses, through: :tee_times
  validates :name, presence: true
end
