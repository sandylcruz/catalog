# frozen_string_literal: true

module Api
  # This is the SessionsController
  class SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

      if @user
        login!(@user)
        render 'api/users/show'
      else
        render json: ['Invalid username or password']
      end
    end

    def destroy
      logout!
      render json: ['Logout successful']
    end
  end
end
