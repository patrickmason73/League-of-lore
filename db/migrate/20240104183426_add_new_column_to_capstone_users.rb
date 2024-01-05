class AddNewColumnToCapstoneUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :capstone_users, :email, :string
  end
end
