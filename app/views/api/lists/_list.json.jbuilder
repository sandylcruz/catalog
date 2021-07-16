# frozen_string_literal: true

json.extract! list, :title, :user_id, :id

json.todoIds list.todo_ids do |todo|
  json.id todo
end
