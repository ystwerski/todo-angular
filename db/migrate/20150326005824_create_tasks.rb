class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :list_id
      t.boolean :complete
      t.integer :priority
      t.string :name
      t.datetime :deadline
      t.text :notes

      t.timestamps null: true
    end
  end
end
