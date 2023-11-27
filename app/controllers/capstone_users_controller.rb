class CapstoneUsersController < ApplicationController
    skip_before_action :authorize, only: :create
    def show
        render json: @current_user, include: [:champions]
    end

    def create
        user = CapstoneUser.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit
    end
end
