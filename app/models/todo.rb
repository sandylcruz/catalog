# frozen_string_literal: true

class Todo < ApplicationRecord
  validates :title, null: false
  validates :body, null: false
  validates :done, null: false

  belongs_to :user,
             class_name: 'User',
             foreign_key: :user_id,
             primary_key: :id
end
