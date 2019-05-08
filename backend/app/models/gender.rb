class Gender < ApplicationRecord
  has_many :character_genders
  has_many :characters, through: :character_genders
end
