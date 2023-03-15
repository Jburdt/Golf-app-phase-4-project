class RemoveFinalScoreFromCourses < ActiveRecord::Migration[6.1]
  def change
    remove_column :courses, :final_score
  end
end
