class Golfer < ApplicationRecord
  has_secure_password
  has_many :tee_times, dependent: :destroy
  has_many :courses, through: :tee_times

  validates :name, presence: true
  validates :username, { presence: true, uniqueness: true}
  validates :password, presence: true

  #Create a custom method in your user model to see which users have tee times before a certain hour of the day
  #
  def self.before(time)
    #for each golfer get the golfers teetimes
    # iterate through each ttime obeject and see if any are before the passed in time
    # if the golfer has a ttime before the passed in time add them to the collection 

    #grab all the teetimes
    #iterate through the teetimes to see which ones are before the passed in time
    #map through the remaining ttimes and ask them about their golfers
    #remove dublicates

    # how do we solve for an array thats not empty 

    Golfer.all.filter do |golfer|
      t_times = golfer.tee_times.where("time < ?", time) 
      # byebug
      if (t_times.length > 0)
        t_times
      else
        false
      end
    end   
  end

end
#Golfer.before(Time.new(2022, 8, 1, 14, 35, 0))
# 2023-04-03 22:26:08