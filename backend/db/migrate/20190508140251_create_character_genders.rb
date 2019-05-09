class CreateCharacterGenders < ActiveRecord::Migration[5.2]
  def change
    create_table :character_genders do |t|
      t.belongs_to :character, foreign_key: true
      t.belongs_to :gender, foreign_key: true
      t.timestamps
    end
  end
end
