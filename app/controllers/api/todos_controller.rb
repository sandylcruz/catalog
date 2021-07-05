# frozen_string_literal: true

# This is the todos controller
class TodosController < ApplicationController
  def create
    @todo = Todo.create(todo_params)

    if @todo.save
      render :show
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def show
    @todo.find_by(id: params[:id])

    nil if @todo
  end

  def destroy
    # TODO: = Todo.find_by(id: params[:id])
  end

  private

  def todos_params
    params.permit(:title, :body, :done)
  end
end
