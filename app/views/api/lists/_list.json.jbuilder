# frozen_string_literal: true

json.extract! list, :title, :user_id, :id

json.todos do
  json.array! list.todos, partial: 'api/todos/todo', as: :todo
end
