class AbilityController < ApplicationController

    def index
        @character = Character.find(params[:character_id])
        render json: @character.abilities, status: :ok
    end
end
