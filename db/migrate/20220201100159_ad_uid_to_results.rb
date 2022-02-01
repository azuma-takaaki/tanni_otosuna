class AdUidToResults < ActiveRecord::Migration[6.1]
  def change
    add_column :results, :uid, :string
  end
end
