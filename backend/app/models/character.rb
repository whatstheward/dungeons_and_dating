class Character < ApplicationRecord
  has_many :character_genders
  has_many :genders, through: :character_genders
  has_many :character_orientations
  has_many :orientations, through: :character_orientations
  has_many :character_dates
  has_many :abilities
  has_many :relationships
end
