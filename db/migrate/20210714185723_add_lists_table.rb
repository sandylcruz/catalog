# frozen_string_literal: true

# Migration to add lists table
class AddListsTable < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.integer :todo_ids, array: true, default: []
      t.string :title, null: false
    end

    add_index :lists, :title
  end
end
