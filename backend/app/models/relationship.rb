class Relationship < ApplicationRecord
  belongs_to :user_character
  belongs_to :characters
end
