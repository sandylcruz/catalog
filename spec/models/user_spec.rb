# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:valid_user) do
    User.new(username: 'calliethecat', password: 'password')
  end

  describe 'Validations' do
    it 'validates presence of username' do
      user = valid_user
      expect(user).to be_valid

      bad_user = User.new(username: '', password: 'password')
      expect(bad_user).not_to be_valid
    end

    it 'validates presence of password' do
      user = valid_user
      expect(user).to be_valid

      bad_user = User.new(username: 'calliethecat', password: '')
      expect(bad_user).not_to be_valid
    end

    it 'validates presence of password digest ' do
      user = valid_user
      user.save!
      expect(user.password_digest).not_to be_nil
    end

    it 'validates presence of session token' do
      user = valid_user
      user.save!
      expect(user.session_token).not_to be_nil
    end

    it 'validates uniqueness of session token' do
      user = valid_user
      user.save!

      other_user = User.new(username: 'cats', password: 'password')
      expect(other_user.session_token).to_not equal(user.session_token)
    end
  end

  describe '#generate_session_token' do
    it 'generates a session token upon invokation' do
      user = valid_user
      user.generate_session_token
      expect(user.session_token).not_to be_nil
    end
  end

  describe '#is_password?' do
    it 'returns true if password is correct' do
      user = valid_user
      expect(user.is_password?('password')).to be true
    end

    it 'returns false if password is incorrect' do
      user = valid_user
      expect(user.is_password?('cats')).to be false
    end
  end

  describe '#password=' do
    it 'updates password digest' do
      user = valid_user
      original_password_digest = user.password_digest
      user.password = 'new_password'

      expect(user.password_digest).to_not eq(original_password_digest)
    end

    it 'changes the password' do
      user = valid_user
      original_password = user.password
      user.password = 'new_password'

      expect(original_password).to_not eq(user.password)
    end
  end

  describe '#reset_session_token' do
    it 'validates reset session token does not equal the old session token' do
      user = valid_user
      user.save!
      old_session_token = user.session_token

      user.reset_session_token!
      new_session_token = user.session_token

      expect(old_session_token).not_to equal(new_session_token)
    end
  end

  describe '::find_by_credentials' do
    it 'returns user if username and password match' do
      user = valid_user
      user.save!
      expect(User.find_by_credentials(user.username, user.password)).to eq(user)
    end

    it 'returns nil if username and password do not match' do
      user = valid_user
      user.save!
      expect(User.find_by_credentials(user.username, 'cats')).to eq(nil)
    end
  end
end
