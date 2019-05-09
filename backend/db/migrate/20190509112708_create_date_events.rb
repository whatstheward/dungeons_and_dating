class CreateDateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :date_events do |t|
      t.string :title
      t.string :situation
      t.string :challenge_type
      t.integer :challenge_rating
      t.timestamps
    end
  end
end
