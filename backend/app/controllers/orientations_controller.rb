class OrientationsController < ApplicationController

    def index
        @character = UserCharacter.find(params[:character_id])
        render json: @character.orientations, status: :ok
    end

end
