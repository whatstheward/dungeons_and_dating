class CreateQuests < ActiveRecord::Migration[5.2]
  def change
    create_table :quests do |t|
      t.belongs_to :quest_events, foreign_key: true
      t.string :title

      t.timestamps
    end
  end
end
