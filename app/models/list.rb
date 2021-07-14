# frozen_string_literal: true

# add list model
class List < ApplicationRecord
  validates :title, presence: true

  belongs_to :user,
             class_name: 'User',
             foreign_key: :user_id,
             primary_key: :id

  has_many :todos,
           class_name: 'Todo',
           foreign_key: :list_id,
           primary_key: :id
end
