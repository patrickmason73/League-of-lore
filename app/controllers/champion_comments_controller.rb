class ChampionCommentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: ChampionComment.all, include: [:capstone_user, :champion]
    end

    def show
        comment = ChampionComment.find(params[:id])
        render json: comment, include: [:capstone_user, :champion]
    end

    def create
        comment = ChampionComment.create!(comment_params)
        render json: comment, include: [:capstone_user, :champion], status: :created
    end

    def destroy
        comment = @current_user.champion_comments.find(params[:id])
        comment.destroy!
        head :no_content
    end

    def update
        comment = @current_user.champion_comments.find(params[:id])
        comment.update!(comment_params)
        render json: comment, status: :accepted
    end

    private

    def comment_params
        params.permit(:content, :capstone_user_id, :champion_id, :capstone_user, :champion)
    end
end
