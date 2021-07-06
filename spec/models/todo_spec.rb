# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Todo, type: :model do
  let(:valid_user) do
    User.new(username: 'callietest', password: 'password')
  end

  let(:valid_todo) do
    Todo.new(title: 'First todo', body: 'This is the first todo', user_id: 1)
  end

  describe 'Validations' do
    it 'validates presence of title' do
      user = valid_user
      user.save!
      todo = Todo.new(title: 'First todo', body: 'This is the first todo', user_id: user.id, done: false)
      expect(todo).to be_valid

      bad_todo = Todo.new(title: '', body: 'this is the body', done: false, user_id: user.id)
      expect(bad_todo).not_to be_valid
    end

    it 'validates presence of body' do
      user = valid_user
      user.save!
      todo = Todo.new(title: 'First todo', body: 'This is the first todo', user_id: user.id, done: false)
      expect(todo).to be_valid

      bad_todo = Todo.new(title: 'title', body: '', done: false, user_id: user.id)
      expect(bad_todo).not_to be_valid
    end

    it 'validates presence of user_id' do
      user = valid_user
      user.save!
      todo = Todo.new(title: 'First todo', body: 'This is the first todo', user_id: user.id, done: false)
      expect(todo).to be_valid

      bad_todo = Todo.new(title: 'title', body: 'this is the body', done: false, user_id: '')
      expect(bad_todo).not_to be_valid
    end

    it 'validates presence of done boolean' do
      user = valid_user
      user.save!
      todo = Todo.new(title: 'First todo', body: 'This is the first todo', user_id: user.id, done: false)
      expect(todo).to be_valid

      bad_todo = Todo.new(title: 'title', body: 'this is the body', user_id: user.id, done: '')
      expect(bad_todo).not_to be_valid
    end
  end
end
