class TeeTime < ApplicationRecord
  belongs_to :golfer 
  belongs_to :course 
  validates :time, :between => ['7:00am', '7:30pm']
end
