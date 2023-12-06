class ChampionComment < ApplicationRecord
    belongs_to :capstone_user
    belongs_to :champion

    validates :content, presence: true, length: { maximum: 500 }
end
