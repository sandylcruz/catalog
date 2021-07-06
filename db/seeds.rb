# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'calpal', password: 'password')
User.create(username: 'squeakfreak', password: 'password')
User.create(username: 'stinky', password: 'password')

Todo.create(title: 'First todo', body: 'This is the first todo body', user: User.first, done: false)
Todo.create(title: 'Second todo', body: 'This is the second todo body', user: User.last, done: false)
Todo.create(title: 'Third todo', body: 'This is the third todo body', user: User.first, done: true)
