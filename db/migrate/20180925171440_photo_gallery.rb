class PhotoGallery < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :picture
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
