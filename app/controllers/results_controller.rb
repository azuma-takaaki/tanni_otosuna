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
    @title = get_title(@result)
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

    def title_list
      infinite = 1000000000
      title_list = [
        {
          name: "留年",
          tanni_range:    [0, 123],
          love_range:     [1, 99],
          business_range: [0, infinite],
          club_range:     [0, infinite],
        },
        {
          name: "ニート",
          tanni_range:    [0, 123],
          love_range:     [0, 0],
          business_range: [0, infinite],
          club_range:     [0, infinite],
        },
        {
          name: "ヒモ",
          tanni_range:    [0, 123],
          love_range:     [100, infinite],
          business_range: [0, 49],
          club_range:     [0, infinite],
        },
        {
          name: "就職浪人",
          tanni_range:    [0, 123],
          love_range:     [100, infinite],
          business_range: [50, infinite],
          club_range:     [0, infinite],
        },
        {
          name: "サラリーマン",
          tanni_range:    [124, infinite],
          love_range:     [0, infinite],
          business_range: [0, 99],
          club_range:     [0, infinite],
        },
        {
          name: "一流サラリーマン",
          tanni_range:    [124, infinite],
          love_range:     [0, infinite],
          business_range: [100, infinite],
          club_range:     [0, infinite],
        },
        # {
        #   name: "一流サラリーマン",
        #   tanni_range:    [124, infinite],
        #   love_range:     [0, 99],
        #   business_range: [100, infinite],
        #   club_range:     [100, infinite],
        # },
        # {
        #   name: "サラリーマン",
        #   tanni_range:    [124, infinite],
        #   love_range:     [0, 99],
        #   business_range: [50, 99],
        #   club_range:     [0, infinite],
        # },
        # {
        #   name: "フリーター",
        #   tanni_range:    [124, infinite],
        #   love_range:     [0, 100],
        #   business_range: [0, 49],
        #   club_range:     [0, infinite],
        # },
        # {
        #   name: "大学院生",
        #   tanni_range:    [124, infinite],
        #   love_range:     [0, 20],
        #   business_range: [0, 20],
        #   club_range:     [0, infinite],
        # }
      ]
    end
end
