class OrientationsController < ApplicationController

    def index 
        @character = Character.find(params[:character_id])
        render json: @character.orientations, status: :ok
    end

end
