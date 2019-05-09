class Orientation < ApplicationRecord
  has_many :character_orientations
<<<<<<< HEAD
  has_many :characters, through: :character_orientations
=======
  has_many :user_characters, through: :character_orientations
>>>>>>> 6bf33d237ceb193d5ef2005113a49f8294a8bdde
  has_many :characters
end
