class CreateUserPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :user_posts do |t|
      t.string  :title
      t.text    :content
      t.string  :img_url
      t.belongs_to :capstone_user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
