# frozen_string_literal: true

class User < ApplicationRecord
  validates :session_token, null: false, uniqueness: true
  validates :password_digest, null: false, uniqueness: true
end
