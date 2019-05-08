class Relationship < ApplicationRecord
  belongs_to :user_character
  belongs_to :npc 
end
