class Character < ApplicationRecord
  has_many :npc_genders
  has_many :genders, through: :npc_genders
  has_many :npc_orientations
  has_many :orientations, through: :npc_orientations
  has_many :character_dates
  has_many :abilities
  has_many :relationships
end
