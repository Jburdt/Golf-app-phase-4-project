class AddTimeToTeeTimes < ActiveRecord::Migration[6.1]
  def change
    add_column :tee_times, :time, :integer
  end
end
