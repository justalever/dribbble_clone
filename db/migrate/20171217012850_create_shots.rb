class CreateShots < ActiveRecord::Migration[5.1]
  def change
    create_table :shots do |t|
      t.string :title
      t.text :description
      t.integer :user_id

      t.timestamps
    end
  end
end
