# frozen_string_literal: true

# This is the migration for the users table
class AddUsersTable < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.datetime :created_at, null: false
    end

    add_index :users, :username, unique: true
  end
end
