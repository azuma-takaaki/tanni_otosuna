class UsersController < ApplicationController
  def new
    @user = User.new
    @result_uid = params[:result_uid]
  end

  def create
    @user = User.new(user_params)
    if @user.save!
      log_in @user

      link_user_and_result(@user, params[:user][:result_uid]) if params[:user][:result_uid].present?

      redirect_to @user
    else
      reder 'new'
    end
  end

  def show
    @user = User.find(params[:id])
    @title_list = title_list()
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end
end
