class CapstoneUsersSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_confirmation, :display_name, :profile_pic, :bio, :champion_comments, :champions
end
