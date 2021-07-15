# frozen_string_literal: true

module Api
  # lists controller
  class ListsController < ApplicationController
    def create
      @list = List.new(user_id: current_user.id, title: params[:title])

      if @list.save
        render :show
      else
        render json: ['List did not save']
      end
    end

    def index
      @todos = current_user.lists
      render :index
    end

    def update
      @list = List.find_by(id: params[:id])

      if @list
        @list.update(list_params)
      else
        render json: ['List not found'], status: :not_found
      end
    end

    def show
      @list = List.find_by(id: params[:id])

      if @list
        render :show
      else
        render json: ['List not found'], status: :not_found
      end
    end

    def destroy
      @list = List.find_by(id: params[:id])

      if @list
        @list.destroy!
        head :no_content
      else
        render json: ['List not found'], status: :not_found
      end
    end

    private

    def list_params
      params.require(:list).permit(:title, :user_id, :todo_ids)
    end
  end
end
