class UserOrientation < ApplicationRecord
  belongs_to :user_character
  belongs_to :orientation
end
