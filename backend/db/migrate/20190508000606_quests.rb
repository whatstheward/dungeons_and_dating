class Quests < ActiveRecord::Migration[5.2]
  def change
    create_table :quests do |t|
      t.string :title
      t.integer :event1_id
      t.integer :event2_id
      t.integer :event3_id
    end 
    add_index :quest_events, :event1_id
    add_index :quest_events, :event2_id
    add_index :quest_events, :event3_id
    add_index :quest_events, [:event1_id, :event2_id, :event3_id], unique: true
  end
end
