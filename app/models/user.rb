# frozen_string_literal: true

require 'bcrypt'
require 'securerandom'

# This is the User model
class User < ApplicationRecord
  attr_reader :password_digest

  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true, uniqueness: true
end
