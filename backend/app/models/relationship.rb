class Relationship < ApplicationRecord
  belongs_to :user_character
  belongs_to :character 
  
  validates_uniqueness_of :character_id, :scope => :user_character_id
end
