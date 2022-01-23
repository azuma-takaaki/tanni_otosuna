class User < ApplicationRecord
    has_secure_password
    has_many :results, dependent: :destroy
end
