# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'POST #create' do
    it 'should create a new user if valid credentials are supplied' do
      post :create,
           params: { username: 'cats', password: 'password' },
           format: :json
      expect(response).to have_http_status(200)
      expect(response).to render_template(:show)
    end

    it 'should not create a new user if invalid credentials are supplied' do
      post :create,
           params: { username: '', password: '' },
           format: :json
      expect(response).to have_http_status(422)
    end

    it 'should validate password length is at least 6 characters' do
      post :create,
           params: { username: 'cats123', password: '12' },
           format: :json
      expect(response).to have_http_status(422)
    end
  end
end
