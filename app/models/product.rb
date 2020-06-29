class Product < ApplicationRecord
  mount_uploader :image_name, ImageNameUploader
  has_many :orders
  has_many :users, through: :orders

  validates :title, {presence: true, length: {maximum:20}}
  validates :description, {presence: true, length: {maximum:500}}
  validates :image_name, {presence: true}
  validates :price, {presence: true}
  validates :stock_quantity, {presence: true}

end
