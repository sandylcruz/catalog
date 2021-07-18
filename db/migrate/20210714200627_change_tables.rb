# frozen_string_literal: true

# Migrationt o remove indices on title on todos/lists, add uniqueness constrant for session token
class ChangeTables < ActiveRecord::Migration[6.1]
  def change
    remove_index :todos, :title
    remove_index :lists, :title
    change_column_default :todos, :list_id, 1
    add_index :users, :session_token, unique: true
  end
end
