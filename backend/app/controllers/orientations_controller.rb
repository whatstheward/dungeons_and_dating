class OrientationsController < ApplicationController

    def index
        @character = Character.find(params[:character_id])
        render json: @character.orientations, status: :ok
    end

    def allorientations
        @orientations = Orientation.all
        render json: @orientations, stauts: :ok
    end

end
