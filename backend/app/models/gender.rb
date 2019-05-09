class Gender < ApplicationRecord
  has_many :user_genders
  has_many :user_characters, through: :user_genders
  has_many :characters
  has_many :characters, through: :character_genders
end
