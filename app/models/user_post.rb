class UserPost < ApplicationRecord
belongs_to :capstone_user
has_many :post_comments, dependent: :destroy

validates :title, presence: true, length: { maximum: 70, minimum: 5 }
validates :content, presence: true, length: { minimum: 30, maximum: 1500 }
validates :img_url, presence: true, format: {with: /\.(png|jpg)\Z/i}
end
