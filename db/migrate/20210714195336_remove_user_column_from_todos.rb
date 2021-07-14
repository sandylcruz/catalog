# frozen_string_literal: true

# Migration to remove user column from todos
class RemoveUserColumnFromTodos < ActiveRecord::Migration[6.1]
  def change
    remove_column :todos, :user_id
  end
end
