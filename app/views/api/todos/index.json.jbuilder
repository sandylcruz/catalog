# frozen_string_literal: true

json.array! @todos, partial: 'api/todos/todo', as: :todo
