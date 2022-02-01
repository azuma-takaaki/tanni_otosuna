class SessionsController < ApplicationController
  def new
    @result_uid = params[:result_uid]
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in user

      link_user_and_result(user, params[:session][:result_uid]) if params[:session][:result_uid].present?

      redirect_to user
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end
end
