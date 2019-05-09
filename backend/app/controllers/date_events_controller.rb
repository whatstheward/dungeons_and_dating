class DateEventsController < ApplicationController

    def index 
        @date_events = DateEvent.all
        render json: @date_events, status: :ok
    end
end
