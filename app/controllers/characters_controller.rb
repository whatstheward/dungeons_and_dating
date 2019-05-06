class CharactersController < ApplicationController

    def index
        @characters = Character.all
        render json: @characters, status: :ok
    end

    def show
        @character = Character.find(params[:id])
    end

    def create 
        @character = Character.new(character_params)
    end

    private

    def character_params
        params.require(:character).permit(:name, :race, :character_class, :bio, :img)
    end
end
