class PagesController < ApplicationController
  protect_from_forgery except: :service_worker

  def service_worker
    render layout: false
  end
end
