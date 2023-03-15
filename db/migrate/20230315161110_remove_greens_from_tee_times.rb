class RemoveGreensFromTeeTimes < ActiveRecord::Migration[6.1]
  def change
    remove_column :tee_times, :greens
  end
end
