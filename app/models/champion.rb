class Champion < ApplicationRecord
    has_many :champion_comments, dependent: :destroy
    has_many :capstone_users, through: :champion_comments
    has_many :abilities, dependent: :destroy
    belongs_to :champion_region
end
