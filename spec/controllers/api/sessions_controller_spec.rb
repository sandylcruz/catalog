# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  let(:valid_user) do
    User.new(username: 'calliealliecat', password: 'password')
  end

  describe 'POST #create' do
    it 'should create new session if user parmas are correct' do
      user = valid_user
      user.save!

      post :create, params: { user: { username: 'calliealliecat', password: 'password' } }, format: :json
      expect(response).to have_http_status(200)
    end

    it 'should not create a new session if user params are incorrect' do
      post :create, params: { user: { username: 'callieallie', password: 'wrongpassword' } }, format: :json
      expect(response).to have_http_status(401)
    end
  end

  describe 'DELETE #destroy' do
    it 'should reset user session token to nil' do
      user = valid_user
      user.save!
      old_session_token = user.session_token

      post :destroy, session: { session_token: old_session_token }
      expect(response).to have_http_status(200)
    end
  end
end
