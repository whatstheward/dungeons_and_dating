class UserCharactersController < ApplicationController

    def index
        @characters = UserCharacter.all
        render json: @characters, status: :ok
    end

    def show
        @character = UserCharacter.find(params[:id])
        render json: @character, status: :ok
    end

    def create
        @character = UserCharacter.new(character_params)
        if @character.save
            render json: @character, status: :ok
        else
            render json: @character.errors.full_messages
        end
    end

    def destroy
        @character = UserCharacter.find(params[:id])
        @character.destroy
    end

    private

    def character_params
        params.require(:UserCharacter).permit(:username, :race, :character_class, :img)
    end
end
