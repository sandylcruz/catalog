# frozen_string_literal: true

class Todo < ApplicationRecord
  validates :title, null: false
  validates :body, null: false
  validates :done, null: false
end
