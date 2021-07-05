# frozen_string_literal: true

require 'bcrypt'
require 'securerandom'

# This is the User model
class User < ApplicationRecord
  validates :username, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true, presence: true
  validates :password_digest, presence: true
  validates :session_token, presence: true, uniqueness: true

  attr_reader :password

  after_initialize :ensure_session_token

  def generate_session_token
    SecureRandom.urlsafe_base64(10)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    save!
    session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user

    user.is_password?(password) ? user : nil
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
