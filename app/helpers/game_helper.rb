module GameHelper
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
