# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'calpal', password: 'password')
User.create(username: 'stinky', password: 'password')
User.create(username: 'squeakfreak', password: 'password')

List.create(title: 'Personal List', user: User.first)
List.create(title: 'Work List', user: User.first)
List.create(title: 'Grocery List', user: User.first)
List.create(title: 'Cat Todos', user: User.first)

Todo.create(title: 'Give Callie a bath', done: false)
Todo.create(title: 'Give Linus treats', done: false)
Todo.create(title: 'Give Squeaky pets', done: false)
Todo.create(title: '1', done: false)
Todo.create(title: '2', done: false)
Todo.create(title: '3', done: false)
Todo.create(title: '4', done: false)
Todo.create(title: '5', done: false)
