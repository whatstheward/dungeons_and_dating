class CreateRelationships < ActiveRecord::Migration[5.2]
  def change
    create_table :relationships do |t|
      t.belongs_to :user_character, foreign_key: true
      t.belongs_to :character, foreign_key: true
      t.integer :progress

      t.timestamps
    end
  end
end
