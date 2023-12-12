class CreatePostComments < ActiveRecord::Migration[6.1]
  def change
    create_table :post_comments do |t|
      t.text   :content
      t.belongs_to :capstone_user, null: false, foreign_key: true
      t.belongs_to :user_post, null: false, foreign_key: true
      t.timestamps
    end
  end
end
