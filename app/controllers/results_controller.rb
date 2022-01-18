class ResultsController < ApplicationController
  def create
    @result = Result.new(result_params)
    if @result.save!
      render json: { status: 200, result_id: @result.id }
    else
      redirect_to root_url
    end
  end

  def show
    @result = Result.find(params[:id])
  end
  private
    
    def result_params
      params.require(:result).permit(:tanni_point, :love_point, :club_point, :business_point)
    end
end
