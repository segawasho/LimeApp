class RemoveImageNameAtProduct < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :image_name, :string
  end
end
