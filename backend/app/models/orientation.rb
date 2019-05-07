class Orientation < ApplicationRecord
  has_many :orientations
  has_many :characters, through: :orientations
end
