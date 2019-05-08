class NpcsController < ApplicationController
  def index
      @npc = Npc.all
      render json: @npc, status: :ok
  end

  def show
      @npc = Npc.find(params[:id])
      render json: @npc, status: :ok
  end

  def create
      @npc = Npc.new(npc_params)
      if @npc.save
          render json: @npc, status: :ok
      else
          render json: @npc.errors.full_messages
      end
  end

  def destroy
      @npc = Npc.find(params[:id])
      @npc.destroy
  end

  private

  def npc_params
      params.require(:Npc).permit(:name, :race, :character_class, :bio, :img)
  end
end
