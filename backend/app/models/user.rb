# frozen_string_literal: true
class User < ApplicationRecord
  has_many :charts,
           foreign_key: :author_id,
           dependent: :destroy,
           inverse_of: :author
  belongs_to :user,
             optional: true,
             foreign_key: :owner_id,
             inverse_of: :alt_users
  has_many :alt_users,
           foreign_key: :owner_id,
           dependent: :destroy,
           class_name: "User",
           inverse_of: :user

  def to_frontend
    {
      handle: owner_id ? "x#{handle}" : handle,
      name:,
      aboutMe: about_me,
      bgColor: bg_color,
      fgColor: fg_color,
      chartCount: charts_count
    }
  end

  def admin?
    ENV["ADMIN_HANDLE"] == sonolus_handle
  end
end
