class CharacterGender < ApplicationRecord
  belongs_to :user_character
  belongs_to :gender
  belongs_to :npc 
end
