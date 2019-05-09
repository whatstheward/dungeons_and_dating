class CreateUserOrientations < ActiveRecord::Migration[5.2]
  def change
    create_table :user_orientations do |t|
      t.belongs_to :user_character, foreign_key: true
      t.belongs_to :orientation, foreign_key: true
      t.timestamps
    end
  end
end
