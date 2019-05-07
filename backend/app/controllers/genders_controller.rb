class GendersController < ApplicationController

    def index
        @character = Character.find(params[:character_id])
        render json: @character.genders, status: :ok
    end
end
