class CreateCharacterQuests < ActiveRecord::Migration[5.2]
  def change
    create_table :character_quests do |t|
      t.belongs_to :character, foreign_key: true
      t.belongs_to :quest, foreign_key: true
      t.integer :points
    end
  end
end
