class CreateChampions < ActiveRecord::Migration[6.1]
  def change
    create_table :champions do |t|
      t.string  :name
      t.belongs_to :champion_region, foreign_key: true
      t.string :splash_art
      t.date :release_date
      t.text :lore
      t.timestamps
    end
  end
end
