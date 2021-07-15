# frozen_string_literal: true

module Api
  # This is the todos controller
  class TodosController < ApplicationController
    before_action :ensure_logged_in

    def create
      # @todo = Todo.new(done: false, title: params[:title], list_id:)
      @todo = Todo.new(todo_params.except(:done))
      @todo.done = false

      if @todo.save
        render :show
      else
        render json: @todo.errors.full_messages, status: 422
      end
    end

    def index
      @todos = current_user.todos

      render :index
    end

    def show
      @todo.find_by(id: params[:id])

      if @todo
        render :show
      else
        render json: ['No todo found']
      end
    end

    def update
      @todo = Todo.find_by(id: params[:id])

      if @todo
        @todo.update(todo_params)
        render :show
      else
        render json: ['No todo found'], status: :not_found
      end
    end

    def destroy
      @todo = Todo.find_by(id: params[:id])

      if @todo
        @todo.destroy!
        head :no_content
      else
        render json: ['No todo found'], status: :not_found
      end
    end

    private

    def todo_params
      params.require(:todo).permit(:title, :done, :list_id)
    end
  end
end
