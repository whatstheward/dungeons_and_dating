class UserCharacter < ApplicationRecord
    has_many :user_genders
    has_many :genders, through: :user_genders
    has_many :user_orientations
    has_many :orientations, through: :user_orientations
    has_many :character_dates
    has_many :abilities
    has_many :relationships
    has_many :characters, through: :relationships

    validates :username, uniqueness: true



end
