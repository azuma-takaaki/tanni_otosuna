class ApplicationController < ActionController::Base
  include SessionsHelper
  include GameHelper
  include ResultsHelper
end
