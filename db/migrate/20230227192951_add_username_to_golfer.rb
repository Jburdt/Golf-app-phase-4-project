class AddUsernameToGolfer < ActiveRecord::Migration[6.1]
  def change
    add_column :golfers, :username, :string
  end
end
