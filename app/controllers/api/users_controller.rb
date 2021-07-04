# frozen_string_literal: true

module Api
  # This is the UsersController
  class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      @user = User.new(user_params)

      if @user.save
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
      @user = User.find_by_id(params[:id])

      if @user
        render :show
      else
        render json: ['User does not exist'], status: 404
      end
    end

    private

    def user_params
      params.require(:user).permit(:username, :password_digest, :session_token)
    end
  end
end
