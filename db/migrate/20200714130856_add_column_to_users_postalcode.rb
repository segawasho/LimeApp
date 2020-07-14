class AddColumnToUsersPostalcode < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :postalcode, :string, null: false, default: ""
  end
end
