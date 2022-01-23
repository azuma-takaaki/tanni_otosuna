class AddTitleToResults < ActiveRecord::Migration[6.1]
  def change
    add_column :results, :title, :string
  end
end
