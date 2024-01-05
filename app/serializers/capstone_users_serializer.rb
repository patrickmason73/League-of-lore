class CapstoneUsersSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_confirmation, :display_name, :profile_pic, :bio, :email, :champion_comments, :champions, :user_posts, :post_comments, :capstone_user 
end
