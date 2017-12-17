class Comment < ApplicationRecord
	belongs_to :shot
	belongs_to :user
end
