class RemovePasswordFromGolfers < ActiveRecord::Migration[6.1]
  def change
    remove_column :golfers, :password, :string
  end
end
