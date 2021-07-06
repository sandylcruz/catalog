# frozen_string_literal: true

# This is the todo class
class Todo < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  validates :done, presence: true
  validates :user_id, presence: true

  belongs_to :user,
             class_name: 'User',
             foreign_key: :user_id,
             primary_key: :id
end
