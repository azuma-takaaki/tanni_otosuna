class GameController < ApplicationController
  def top
    if logged_in?
      @user = current_user
    end
  end

  def play
  end
end
