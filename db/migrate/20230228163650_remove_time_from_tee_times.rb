class RemoveTimeFromTeeTimes < ActiveRecord::Migration[6.1]
  def change
    remove_column :tee_times, :time, :dateTime
  end
end
