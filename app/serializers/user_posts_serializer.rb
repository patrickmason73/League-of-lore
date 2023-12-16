class UserPostsSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :img_url, :capstone_user, :post_comments
end
