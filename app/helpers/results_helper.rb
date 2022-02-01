module ResultsHelper
  def link_user_and_result(user, result_uid)
    result = Result.find_by(uid: result_uid)
    if result
      result.update(user_id: user.id)
    end
  end
end
