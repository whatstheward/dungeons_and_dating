class DatesController < ApplicationController

  def index
      @character = Character.find(params[:character_id])
      render json: @character.dates, status: :ok
  end

end
