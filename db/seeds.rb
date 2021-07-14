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

List.create(title: 'Cat Todos', user: User.first, todo_ids: [0, 1, 2])
List.create(title: 'My second list', user: User.first, todo_ids: [])
List.create(title: 'Today`s Todos', user: User.last, todo_ids: [])

Todo.create(title: 'Give Callie a bath', user: User.first, done: false, list: List.first)
Todo.create(title: 'Give Linus treats', user: User.first, done: false, list: List.first)
Todo.create(title: 'Give Squeaky pets', user: User.first, done: false, list: List.first)
Todo.create(title: '1', user: User.first, done: false, list: List.last)
Todo.create(title: '2', user: User.first, done: false, list: List.last)
Todo.create(title: '3', user: User.first, done: false, list: List.last)
Todo.create(title: '4', user: User.first, done: false, list: List.last)
Todo.create(title: '5', user: User.first, done: false, list: List.last)
