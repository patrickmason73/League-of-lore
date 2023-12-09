class ChampionsController < ApplicationController
    skip_before_action :authorize, only: [:index, :search]

    def index
        render json: Champion.all, include: [:champion_comments, :capstone_users]
    end

    # def search
    #     champ = Champion.find_by(name: params[:name].capitalize)
    #     render json: champ, include: [:champion_comments, :capstone_users]
    # end
end
