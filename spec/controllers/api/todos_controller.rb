# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::TodosController, type: :controller do
  describe 'POST #create' do
    it 'should create a new todo if valid credentials are supplied' do
      post :create,
           params: { title: 'cats', body: 'body', done: false, user_id: 1 },
           format: :json
      expect(response).to have_http_status(200)
      expect(response).to render_template(:show)
    end

    it 'should not create a new todo if invalid credentials are supplied' do
      post :create,
           params: { title: 'cats', body: '', done: false, user_id: 1 },
           format: :json
      expect(response).to have_http_status(422)
    end
  end
end
