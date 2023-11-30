class CapstoneUser < ApplicationRecord
    has_secure_password
    has_many :champion_comments, dependent: :destroy
    has_many :champions, through: :champion_comments

    validates :profile_pic, presence: true, format: {with: /\.(png|jpg)\Z/i}
    validates :username, presence: true, uniqueness: true
    validates :bio, presence: true, length: { maximum: 1000 }
    validates :display_name, presence: true, uniqueness: true
end
