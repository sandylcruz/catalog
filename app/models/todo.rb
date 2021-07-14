# frozen_string_literal: true

# This is the todo class
class Todo < ApplicationRecord
  validates :title, presence: true
  validates :done, inclusion: [true, false]
  validates :user, presence: true

  belongs_to :list,
             class_name: 'List',
             foreign_key: :list_id,
             primary_key: :id

  has_one :user, through: :list, source: :user
end
