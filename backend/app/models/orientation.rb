class Orientation < ApplicationRecord
  has_many :character_orientations
  has_many :characters, through: :character_orientations
  has_many :npcs
end
