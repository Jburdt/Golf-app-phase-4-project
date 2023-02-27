class CreateTeeTimes < ActiveRecord::Migration[6.1]
  def change
    create_table :tee_times do |t|
      t.integer :food_rating
      t.integer :drink_rating
      t.string :greens
      t.integer :golfer_id
      t.integer :course_id
      t.datetime :time

      t.timestamps
    end
  end
end
