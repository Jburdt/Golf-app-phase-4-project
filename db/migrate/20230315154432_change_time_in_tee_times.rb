class ChangeTimeInTeeTimes < ActiveRecord::Migration[6.1]
  def change
    change_column :tee_times, :time, :time
  end
end
