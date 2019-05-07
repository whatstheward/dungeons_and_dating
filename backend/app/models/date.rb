class Date < ApplicationRecord
  belongs_to :event_1, class_name: 'date_event'
  belongs_to :event_2, class_name: 'date_event'
  belongs_to :event_3, class_name: 'date_event'
  belongs_to :character
end
