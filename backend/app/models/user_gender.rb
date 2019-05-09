class UserGender < ApplicationRecord
  belongs_to :user_character
  belongs_to :gender

end
