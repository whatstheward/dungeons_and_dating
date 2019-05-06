class CharactersController < ApplicationController

    def index
        @characters = Character.all
        render json: @characters, status: :ok
    end

    def show
        @character = Character.find(params[:id])
        render json: @character, status: :ok
    end

    def create 
        @character = Character.new(character_params)
        render json: @character, status: :ok
    end

    private

    def character_params
        params.require(:character).permit(:name, :race, :character_class, :bio, :img)
    end
end
