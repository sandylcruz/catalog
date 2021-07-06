# frozen_string_literal: true

# This is a migration to add the todos table
class AddTodosTable < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string 'title', null: false
      t.string 'body', null: false
      t.boolean 'done', null: false
      t.integer 'user_id', null: false
    end

    add_index :todos, :title
  end
end
