class ResultsController < ApplicationController
  def create
    @result = Result.new(result_params)
    @result.user = current_user if current_user
    @result.title = get_title(@result)
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

    def get_title(result)
      title_list = title_list()
      point_type_list = ["tanni", "love", "business", "club"]
      point_type_list.each do |type|
        delete_title_list = []
        title_list.each do |title|
          unless result[type+"_point"]>=title[(type+"_range").to_sym][0] && result[type+"_point"]<=title[(type+"_range").to_sym][1] then
            delete_title_list.push title
          end
        end
        title_list.delete_if do |title|
          delete_title_list.include?(title)
        end
      end
      if title_list.length == 0 then
        return "マッチしませんでした"
      elsif title_list.length == 1 then
        return title_list[0][:name]
      elsif title_list.length >= 1 then
        return title_list
      end
    end
end
