class GendersController < ApplicationController

    def index
        @character = UserCharacter.find(params[:user_character_id])
        render json: @character.genders, status: :ok
    end
end
