class CharactersController < ApplicationController
  def index
      @character = Character.all
      render json: @character, status: :ok
  end

  def show
      @character = Character.find(params[:id])
      render json: @character, status: :ok
  end

  def create
      @character = Character.new(character_params)
      if @character.save
          render json: @character, status: :ok
      else
          render json: @character.errors.full_messages
      end
  end

  def destroy
      @character = Character.find(params[:id])
      @character.destroy
  end

  private

  def character_params
      params.require(:Character).permit(:name, :race, :character_class, :bio, :img)
  end
end
