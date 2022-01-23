class Result < ApplicationRecord
  belongs_to :user, optional: true
end
