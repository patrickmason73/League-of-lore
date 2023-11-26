class CreateAbilities < ActiveRecord::Migration[6.1]
  def change
    create_table :abilities do |t|
      t.string :name
      t.text :description
      t.string :icon
      t.belongs_to :champion, foreign_key: true
      t.timestamps
    end
  end
end
