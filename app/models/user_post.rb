class UserPost < ApplicationRecord
belongs_to :capstone_user
has_many :post_comments

validates :title, presence: true, length: { maximum: 100 }
validates :content, presence: true, length: { minimum: 50 }
validates :img_url, presence: true, format: {with: /\.(png|jpg)\Z/i}
end
