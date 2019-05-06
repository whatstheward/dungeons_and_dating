class CreateQuests < ActiveRecord::Migration[5.2]
  def change
    create_table :quests do |t|
      t.belongs_to :parties, foreign_key: true
      t.belongs_to :quests_events, foreign_key: true 


      t.timestamps
    end
  end
end
