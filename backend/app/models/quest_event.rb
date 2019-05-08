class QuestEvent < ApplicationRecord
  has_many :quests, :foreign_key => 'quest_event1'
  has_many :quests, :foreign_key => 'quest_event2'
  has_many :quests, :foreign_key => 'quest_event3'
end
