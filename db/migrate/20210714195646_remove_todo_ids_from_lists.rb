# frozen_string_literal: true

# Migration to remove todo_ids column from lists
class RemoveTodoIdsFromLists < ActiveRecord::Migration[6.1]
  def change
    remove_column :lists, :todo_ids
  end
end
