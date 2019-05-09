class CharacterOrientationsController < ApplicationController

    def create
        @character_orientation = CharacterOrientation.new(character_orientation_params)
        if @character_orientation.save
            render json: @character_orientation, status: :ok
        else
            render json: @character_orientation.errors.full_messages
        end
    end

    private 

    def character_orientation_params
        params.require(:character_orientation).permit(:character_id, :orientation_id)
    end
end
