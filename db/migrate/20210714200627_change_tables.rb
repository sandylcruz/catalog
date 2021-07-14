# frozen_string_literal: true

# Migrationt o remove indices on title on todos/lists, add uniqueness constrant for session token
class ChangeTables < ActiveRecord::Migration[6.1]
  def change
    remove_index :todos, :title
    remove_index :lists, :title
    add_index :users, :session_token, unique: true
  end
end
