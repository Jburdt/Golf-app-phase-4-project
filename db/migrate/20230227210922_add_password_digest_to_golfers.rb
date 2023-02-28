class AddPasswordDigestToGolfers < ActiveRecord::Migration[6.1]
  def change
    add_column :golfers, :password_digest, :string
  end
end
