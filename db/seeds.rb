# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(name: "管理者",
             email: "lime.lime.lime.jp@gmail.com",
             password:  "111111",
             address: "千葉県市川市曽谷7-7-7",
             admin: true
           )
