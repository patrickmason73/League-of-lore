class CapstoneUser < ApplicationRecord
    has_secure_password
    has_many :champion_comments, dependent: :destroy
    has_many :champions, through: :champion_comments
    has_many :user_posts, dependent: :destroy
    has_many :post_comments, dependent: :destroy

    validates :profile_pic, presence: true, format: { with: /\.(png|jpg)\Z/i }
    validates :username, presence: true, uniqueness: true, length: { maximum: 20, minimum: 8 }
    validates :bio, presence: true, length: { maximum: 1000 }
    validates :display_name, presence: true, uniqueness: true, length: { maximum: 12, minimum: 5 }
    validates :email, presence: true, uniqueness: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i, message: 'is not a valid email address'}
end
