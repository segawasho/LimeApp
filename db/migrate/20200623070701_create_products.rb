class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.string :image_name
      t.integer :price
      t.integer :stock_quantity

      t.timestamps
    end
  end
end
