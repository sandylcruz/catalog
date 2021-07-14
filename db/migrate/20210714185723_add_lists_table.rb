# frozen_string_literal: true

# Migration to add lists table
class AddListsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :todo_ids, array: true, default: []
      t.integer :user_id, null: false
    end

    add_index :lists, :title
    add_index :lists, :user_id
  end
end
