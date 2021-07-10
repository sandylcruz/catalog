# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[create]
    resource :session, only: %i[create destroy]
    resources :todos, only: %i[create show update destroy]
  end
  root 'static_pages#root'
end
