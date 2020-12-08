class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :image
      t.boolean :sold
      t.integer :price
      t.string :title
      t.string :location
      t.string :size
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
