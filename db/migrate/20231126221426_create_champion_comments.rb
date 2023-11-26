class CreateChampionComments < ActiveRecord::Migration[6.1]
  def change
    create_table :champion_comments do |t|
      t.text :content
      t.belongs_to :capstone_user, foreign_key: true
      t.belongs_to :champion, foreign_key: true
      t.timestamps
    end
  end
end
