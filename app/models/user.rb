# frozen_string_literal: true

require 'bcrypt'
require 'securerandom'

# This is the User model
class User < ApplicationRecord
  attr_reader :password_digest

  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true, uniqueness: true

  after_intialize :generate_session_token

  def generate_session_token
    SecureRandom.urlsafe_base64(10)
  end

  def reset_session_token!

  end

  def password=(password)
  end

  def is_password?
  end

  def find_by_credentials(username, password)
  end
end
