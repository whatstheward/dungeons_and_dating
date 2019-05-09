class OrientationsController < ApplicationController

    def character_orientations
        @character = Character.find(params[:character_id])
        render json: @character.orientations, status: :ok
    end
    def user_character_orientations
        @character = UserCharacter.find(params[:user_character_id])
        render json: @character.orientations, status: :ok
    end

    def allorientations
        @orientations = Orientation.all
        render json: @orientations, stauts: :ok
    end

end
