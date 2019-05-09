class CharacterDatesController < ApplicationController
  def index
      @character = UserCharacter.find(params[:user_character_id])
      render json: @character.character_dates, status: :ok
  end

end
