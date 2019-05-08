class Gender < ApplicationRecord
  has_many :character_genders
  has_many :user_characters, through: :character_genders
  has_many :npcs, through: :character_genders
end
