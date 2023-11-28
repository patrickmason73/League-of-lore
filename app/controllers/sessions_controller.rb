class SessionsController < ApplicationController
 skip_before_action :authorize, only: :create
    
    def create
        newUser = CapstoneUser.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = newUser.id
            render json: newUser, include: [:champion_comments, :champions]
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
