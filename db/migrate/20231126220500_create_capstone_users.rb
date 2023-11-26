class CreateCapstoneUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :capstone_users do |t|
      t.string :username
      t.string :password_digest
      t.string :display_name
      t.string :profile_pic
      t.text   :bio
      t.timestamps
    end
  end
end
