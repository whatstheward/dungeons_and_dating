class CharacterQuest < ApplicationRecord
  belongs_to :character_1, class_name: 'character'
  belongs_to :character_2, class_name: 'character'
  belongs_to :character_3, class_name: 'character'
  belongs_to :quest
end
