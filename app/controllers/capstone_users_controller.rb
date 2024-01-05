class CapstoneUsersController < ApplicationController
    skip_before_action :authorize, only: :create
    def show
        render json: @current_user, include: [:champion_comments, :champions, :user_posts, :post_comments]
    end

    def create
        @user = CapstoneUser.create!(user_params)
        if @user.save!
        session[:user_id] = @user.id
        UserMailer.welcome_email(@user).deliver_now
        render json: @user, status: :created
        end
    end

    def update
      @current_user.update!(user_params)    
      render json: @current_user, status: :accepted     
    end

    def destroy
      user = @current_user
      user.destroy!
      head :no_content  
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :display_name, :profile_pic, :bio, :email, :champion_comments, :champions, :user_posts, :post_comments, :capstone_user)
    end
end
