class CreateUserCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :user_characters do |t|
      t.string :username
      t.string :name
      t.string :race
      t.string :character_class
      t.string :img
      t.timestamps
    end
  end
end
