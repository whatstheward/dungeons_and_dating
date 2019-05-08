class QuestEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :quest_events do |t|
      t.string :title
      t.string :scenario
      t.string :challenge_type
      t.integer :challenge_rating
    end
  end
end
