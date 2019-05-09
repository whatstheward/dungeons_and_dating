class Gender < ApplicationRecord
<<<<<<< HEAD
  has_many :character_genders
  has_many :user_characters, through: :character_genders
=======
  has_many :user_genders
  has_many :user_characters, through: :user_genders
  has_many :characters
>>>>>>> 6bf33d237ceb193d5ef2005113a49f8294a8bdde
  has_many :characters, through: :character_genders
end
