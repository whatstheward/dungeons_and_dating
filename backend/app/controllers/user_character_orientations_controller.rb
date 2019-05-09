class UserCharacterOrientationsController < ApplicationController
    def create
        @character_orientation = UserOrientation.new(user_orientation_params)
        if @character_orientation.save
            render json: @character_orientation, status: :ok
        else
            render json: @character_orientation.errors.full_messages
        end
    end

    private 

    def user_orientation_params
        params.require(:user_character_orientation).permit(:user_character_id, :orientation_id)
    end
end
