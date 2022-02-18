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
        image_path: "retention.png",
        character_words: "もう一年遊べるわぁ",
      },
      {
        name: "ニート",
        tanni_range:    [0, 123],
        love_range:     [0, 0],
        business_range: [0, infinite],
        club_range:     [0, infinite],
        image_path: "neet.png",
        character_words: "有産階級の仲間入りですわwww",
      },
      {
        name: "ヒモ",
        tanni_range:    [0, 123],
        love_range:     [100, infinite],
        business_range: [0, 49],
        club_range:     [0, infinite],
        image_path: "himo.png",
        character_words: "俺と付き合えるとか幸せだよなあ。",
      },
      {
        name: "就職浪人",
        tanni_range:    [0, 123],
        love_range:     [100, infinite],
        business_range: [50, infinite],
        club_range:     [0, infinite],
        image_path: "ronin.png",
        character_words: "彼女のためにも良い会社に入るぞ！！！",
      },
      {
        name: "サラリーマン",
        tanni_range:    [124, infinite],
        love_range:     [0, infinite],
        business_range: [0, 99],
        club_range:     [0, infinite],
        image_path: "businessman.png",
        character_words: "宝くじでも買おうかな",
      },
      {
        name: "一流サラリーマン",
        tanni_range:    [124, infinite],
        love_range:     [0, infinite],
        business_range: [100, infinite],
        club_range:     [0, infinite],
        image_path: "businessman_macho.png",
        character_words: "お前らとはレベルが違うんだよなあwww",
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
