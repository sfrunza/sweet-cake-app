class CreateCostumers < ActiveRecord::Migration[5.1]
  def change
    create_table :costumers do |t|
      t.string :name
      t.string :email
      t.string :message

      t.timestamps
    end
  end
end
