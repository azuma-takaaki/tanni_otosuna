class RemoveTitleFromResults < ActiveRecord::Migration[6.1]
  def change
    remove_column :results, :title_id, :integer
  end
end
