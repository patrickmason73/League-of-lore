class CapstoneUsersController < ApplicationController
    skip_before_action :authorize, only: :create
    def show
        render json: @current_user, include: [:champion_comments, :champions, :user_posts, :post_comments]
    end

    def create
        newUser = CapstoneUser.create!(user_params)
        session[:user_id] = newUser.id
        render json: newUser, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :display_name, :profile_pic, :bio, :champion_comments, :champions, :user_posts, :post_comments)
    end
end
