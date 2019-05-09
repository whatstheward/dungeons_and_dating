class GendersController < ApplicationController

    def index
        @character = Character.find(params[:character_id])
        render json: @character.genders, status: :ok
    end

    def allgenders
        @genders = Gender.all
        render json: @genders, status: :ok
    end

end
