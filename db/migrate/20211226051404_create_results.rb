class CreateResults < ActiveRecord::Migration[6.1]
  def change
    create_table :results do |t|
      t.integer :user_id
      t.integer :title_id
      t.integer :tanni_point
      t.integer :love_point
      t.integer :club_point
      t.integer :business_point

      t.timestamps
    end
  end
end
