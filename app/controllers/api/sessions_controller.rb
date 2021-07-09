# frozen_string_literal: true

module Api
  # This is the SessionsController
  class SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(params[:username], params[:password])

      if @user.nil?
        render json: ['Invalid username or password'], status: 401
      else
        login!(@user)
        render 'api/users/show'
      end
    end

    def destroy
      session_token = session[:session_token]
      user = User.find_by(session_token: session_token)
      user.session_token = SecureRandom.urlsafe_base64(10)
      user.save!
      session[:session_token] = nil
      render json: ['Logout successful']
    end
  end
end
