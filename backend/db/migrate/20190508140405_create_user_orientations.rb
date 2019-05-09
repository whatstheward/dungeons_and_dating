class CreateUserOrientations < ActiveRecord::Migration[5.2]
  def change
<<<<<<< HEAD:backend/db/migrate/20190508140405_create_character_orientations.rb
    create_table :character_orientations do |t|
      t.belongs_to :character, foreign_key: true
=======
    create_table :user_orientations do |t|
      t.belongs_to :user_character, foreign_key: true
>>>>>>> 6bf33d237ceb193d5ef2005113a49f8294a8bdde:backend/db/migrate/20190508140405_create_user_orientations.rb
      t.belongs_to :orientation, foreign_key: true
      t.timestamps
    end
  end
end
