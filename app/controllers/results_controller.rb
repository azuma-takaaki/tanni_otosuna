class ResultsController < ApplicationController
  def create
    @result = Result.new(result_params)
    if @result.save!
      render "show"
    else
      redirect_to root_url
    end
  end

  private
    
    def result_params
      params.require(:result).permit(:tanni_point, :love_point, :club_point, :business_point)
    end
end
