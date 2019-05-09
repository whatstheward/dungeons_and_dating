class Quest < ApplicationRecord
    belongs_to :quest_event1, class_name: 'QuestEvent'
    belongs_to :quest_event2, class_name: 'QuestEvent'
    belongs_to :quest_event3, class_name: 'QuestEvent'
    
end