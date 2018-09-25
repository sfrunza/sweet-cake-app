ActiveAdmin.register Picture do

form do |f|
  f.inputs 'Add New Picture' do
    f.input :name
    f.input :description
    f.input :picture, :as => :file
  end
  f.actions
end
# menu :priority => 4
config.batch_actions = true

filter :name
filter :description
filter :created_at

permit_params :picture, :name, :description

scope :all, :default => true

index :as => :grid do |product|
  div do
    a :href => admin_picture_path(product) do
      image_tag(product.picture)
    end
  end
  div do

    a :href => admin_picture_path(product) do
      "Name:" + "  " + product.name
    end
  end

  div do
   "Description:"+ " " + product.description
 end

end

sidebar :pictures, :only => :show do

end

end
