class CreateCharacterDates < ActiveRecord::Migration[5.2]
  def change
    create_table :character_dates do |t|
      t.belongs_to :character, foreign_key: true
      t.belongs_to :character, foreign_key: true
      t.belongs_to :character, foreign_key: true
      t.belongs_to :date, foreign_key: true
      t.boolean :success?
    end
  end
end
