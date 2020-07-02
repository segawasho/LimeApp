class ProductsAddImagesAndDropImageName < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :image_name, :string
    add_column :products, :images, :json
  end
end
