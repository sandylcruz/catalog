# frozen_string_literal: true

module Api
  # This is the todos controller
  class TodosController < ApplicationController
    def create
      @todo = Todo.new(todo_params)

      if @todo.save
        render :show
      else
        render json: @todo.errors.full_messages, status: 422
      end
    end

    def show
      @todo.find_by(id: params[:id])

      if @todo
        render :show
      else
        render json: ['No todo found']
      end
    end

    def destroy
      @todo = Todo.find_by(id: params[:id])

      if @todo
        @todo.destroy
      else
        render json: ['No todo found'], status: :not_found
      end
    end

    private

    def todos_params
      params.permit(:title, :body, :done)
    end
  end
end
