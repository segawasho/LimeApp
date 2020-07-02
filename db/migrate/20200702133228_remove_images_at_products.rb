class RemoveImagesAtProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :images, :json
  end
end
