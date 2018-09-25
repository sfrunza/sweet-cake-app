class Picture < ActiveRecord::Base
  mount_uploader :picture, GalleryUploader

end
