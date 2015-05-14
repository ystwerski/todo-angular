class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.boolean :completed
      t.string :name

      t.timestamps null: true
    end
  end
end
