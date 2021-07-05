# frozen_string_literal: true

module Api
  # This is the SessionsController
  class SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

      if @user.nil?
        render json: ['Invalid username or password'], status: 401
      else
        login!(@user)
        render 'api/users/show'
      end
    end

    def destroy
      puts session
      logout!
      render json: ['Logout successful']
    end
  end
end
