class TeeTime < ApplicationRecord
  belongs_to :golfer 
  belongs_to :course 
  validates :time, presence: true
end
