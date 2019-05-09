class GendersController < ApplicationController

    def character_genders
        @character = Character.find(params[:character_id])
        render json: @character.genders, status: :ok
    end
   
    def user_character_genders
        @character = UserCharacter.find(params[:user_character_id])
        render json: @character.genders, status: :ok
    end

    def allgenders
        @genders = Gender.all
        render json: @genders, status: :ok
    end

end
