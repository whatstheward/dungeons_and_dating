class UserCharacterGendersController < ApplicationController

    def create
        @user_gender = UserGender.new(user_gender_params)
        if @user_gender.save
            render json: @user_gender, status: :ok
        else
            render json: @user_gender.errors.full_messages
        end
    end

    private 

    def user_gender_params
        params.require(:user_gender).permit(:user_character_id, :gender_id)
    end
end
