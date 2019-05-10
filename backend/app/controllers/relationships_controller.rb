class RelationshipsController < ApplicationController
    def index
        @relationships = Relationship.all
        render json: @relationships, stauts: :ok
    end

    def create
        @relationship = Relationship.find_or_create_by(relationship_params)
        if @relationship.save
            render json: @relationship, status: :ok
        else
            render json: @relationship.errors.full_messages
        end
    end

    def update
        @relationship = Relationship.find(params[:id])
        if @relationship.update(relationship_params)
            render json: @relationship, status: :ok
        else
            render json: @relationship.errors.full_messages
        end
    end

    private 

    def relationship_params
        params.require(:relationship).permit(:user_character_id, :character_id, :progress)
    end
end
