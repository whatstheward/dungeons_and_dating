class Orientation < ApplicationRecord
  has_many :character_orientations
  has_many :characters, through: :character_orientations
  has_many :user_orientations
  has_many :user_characters, through: :user_orientations
end
