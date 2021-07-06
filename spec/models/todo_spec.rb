# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Todo, type: :model do
  let(:valid_todo) do
    Todo.new(title: 'First todo', body: 'This is the first todo', done: false, user_id: 1)
  end

  describe 'Validations' do
    it 'validates presence of title' do
      todo = valid_todo
      # todo.save!
      expect(todo).to be_valid

      # bad_todo = Todo.new(title: '', body: 'this is the body', done: false
      # expect(bad_todo).not_to be_valid
    end
  end
end

# it 'validates presence of body' do
#   todo = valid_todo
#   expect(todo).to be_valid

#   bad_todo = todo.new(todoname: 'calliethecat', password: '')
#   expect(bad_todo).not_to be_valid
# end

# it 'validates presence of done boolean' do
#   todo = valid_todo
#   todo.save!
#   expect(todo.password_digest).not_to be_nil
# end
