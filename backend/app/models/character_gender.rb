class CharacterGender < ApplicationRecord
  belongs_to :gender
  belongs_to :character 
end
