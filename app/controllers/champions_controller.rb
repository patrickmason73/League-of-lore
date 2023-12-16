class ChampionsController < ApplicationController
    skip_before_action :authorize, only: [:index, :search]

    def index
        champions = Champion.all
        sorted_champions = champions.order(:name)
        
        render json: sorted_champions, include: [:champion_comments, :capstone_users, :champion_region]
    end

end
