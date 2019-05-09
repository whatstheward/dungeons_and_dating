class CreateCharacterDates < ActiveRecord::Migration[5.2]
  def change
    create_table :character_dates do |t|
      t.belongs_to :relationships, foreign_key: true
      t.integer :points 
      t.timestamps
    end
  end
end
