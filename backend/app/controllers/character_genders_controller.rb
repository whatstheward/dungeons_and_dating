class CharacterGendersController < ApplicationController
    def create
        @character_gender = CharacterGender.new(character_gender_params)
        if @character_gender.save
            render json: @character_gender, status: :ok
        else
            render json: @character_gender.errors.full_messages
        end
    end

    private 

    def character_gender_params
        params.require(:character_gender).permit(:character_id, :gender_id)
    end
end
