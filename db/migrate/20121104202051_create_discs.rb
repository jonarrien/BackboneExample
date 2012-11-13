class CreateDiscs < ActiveRecord::Migration
  def change
    create_table :discs do |t|
      t.string :title
      t.binary :image

      t.timestamps
    end
  end
end
