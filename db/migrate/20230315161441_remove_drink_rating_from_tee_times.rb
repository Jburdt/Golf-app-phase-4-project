class RemoveDrinkRatingFromTeeTimes < ActiveRecord::Migration[6.1]
  def change
    remove_column :tee_times, :drink_rating
  end
end
