class Quests < ApplicationRecord
  belongs_to :parties
  belongs_to :quests_events
end
