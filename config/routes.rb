# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :users, only: %i[create show]
  end
  root 'static_pages#root'
end
