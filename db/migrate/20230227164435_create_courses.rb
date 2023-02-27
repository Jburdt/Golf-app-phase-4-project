class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :address
      t.string :state
      t.decimal :cost
      t.string :image
      t.integer :final_score

      t.timestamps
    end
  end
end
