class CharacterGender < ApplicationRecord
  belongs_to :character
  belongs_to :gender

end
