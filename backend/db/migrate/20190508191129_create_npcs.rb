class CreateNpcs < ActiveRecord::Migration[5.2]
  def change
    create_table :npcs do |t|
      t.string :name
      t.string :race
      t.string :character_class
      t.string :img
      t.string :bio

      t.timestamps
    end
  end
end