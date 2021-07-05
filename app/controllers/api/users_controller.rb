# frozen_string_literal: true

module Api
  # This is the UsersController
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)

      if @user.save
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    private

    def user_params
      params.permit(:username, :password, :password_digest, :session_token)
    end
  end
end
