class PagesController < ApplicationController
  def home
    render inertia: "Home"
  end

  def show
    name = params[:name].to_s
    raise_404 if name.blank?
    render inertia: name.titlecase
  end

  def skip_auth?
    true
  end
end
