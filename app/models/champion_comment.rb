class ChampionComment < ApplicationRecord
    belongs_to :capstone_user
    belongs_to :champion
end
