class PostComment < ApplicationRecord
    belongs_to :user_post
    belongs_to :capstone_user

    validates :content, presence: true, length: { maximum: 500 }

end
