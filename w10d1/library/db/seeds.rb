# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data..."

# create authors
puts "Creating Authors"

20.times do
  Author.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  )
end

authors = Author.all

# create books
puts "Creating Books"

200.times do
  Book.create(
    author: authors.sample,
    title: Faker::Book.title,
    publisher: Faker::Book.publisher,
    num_pages: rand(1..500)
  )
end

puts "Done!"
