class RemoveFoodDrinkFromTeeTimes < ActiveRecord::Migration[6.1]
  def change
    remove_column :tee_times, :food_rating
  end
end
