class CreateQuestEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :quest_events do |t|
      t.string :title
      t.string :situation
      t.string :challenge_type
      t.integer :challenge_rating

      t.timestamps
    end
  end
end
