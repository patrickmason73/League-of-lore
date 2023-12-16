class UserPostsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        posts = UserPost.all.order(created_at: :DESC)
        render json: posts.to_json(:include => { 
            :post_comments => {:include => [:capstone_user]}, 
            :capstone_user => {:only => [:id, :display_name, :profile_pic]}
            })
    end

    def create
        post = @current_user.user_posts.create!(post_params)
        render json: post, include: [:post_comments, :capstone_user], status: :created
    end

    def destroy
       post = @current_user.user_posts.find(params[:id])
        post.destroy!
        head :no_content
    end

    private

    def post_params
        params.permit(:title, :content, :img_url, :capstone_user)
    end
end
