class PostCommentsController < ApplicationController

    def create
        comment = @current_user.post_comments.create!(comment_params)
        render json: comment, include: [:capstone_user, :user_post],status: :created
    end

    def destroy
        comment = @current_user.post_comments.find(params[:id])
        comment.destroy!
        head :no_content
    end

    def update
        comment = @current_user.post_comments.find(params[:id])
        comment.update!(comment_params)
        render json: comment, include: [:capstone_user], status: :accepted
    end


    private

    def comment_params
        params.permit(:content, :capstone_user, :user_post, :capstone_user_id, :user_post_id, :id, :post_comment)
    end
end
