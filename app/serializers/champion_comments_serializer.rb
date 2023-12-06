class ChampionCommentsSerializer < ActiveModel::Serializer
  attributes :id, :content, :capstone_user, :champion, :champion_comment
end
