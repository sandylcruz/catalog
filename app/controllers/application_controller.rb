# frozen_string_literal: true

# This is the application controller
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  helper_method :current_user, :logged_in?

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    session_token = session[:session_token]
    return nil unless session_token

    @current_user || User.find_by_session_token(session_token)
  end

  def logged_in?
    !current_user.nil?
  end

  def ensure_logged_in
    render json: ['Please log in'], status: :unauthorized unless logged_in?
  end
end
