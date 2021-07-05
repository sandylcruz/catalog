# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe 'POST #create' do
    it 'should create a new user if valid credentials are supplied' do
      # post :create,
      # params: { user: { username: 'cats' , password: 'password' }},
      # format: :json
      # expect(response).to have_http_status(200)
      # # expect(response).to render_template(:show)
    end

    it 'should not create a new user if invalid credentials are supplied' do
    end

    it 'should validate password length is at least 6 characters' do
    end
  end

  describe 'GET #show' do
    it 'should return user if given valid user id' do
    end
  end
end
