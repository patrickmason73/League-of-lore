class ChampionsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Champion.all, include: [:champion_comments, :capstone_users]
    end
end
