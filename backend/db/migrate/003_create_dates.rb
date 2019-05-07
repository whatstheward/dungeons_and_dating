class CreateDates < ActiveRecord::Migration[5.2]
  def change
    create_table :dates do |t|
      t.belongs_to :characters, foreign_key: true
      t.belongs_to :date_events, foreign_key: true 

      t.timestamps
    end
  end
end
