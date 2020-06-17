class Api::FavoritesController < ApplicationController
  respond_to :json

  def index
    favorites = Favorite.where(user_id: current_user.id)
    respond_with favorites
  end

  def show
    favorite = Favorite.find(params[:id])
    respond_with favorite
  end

  def new
    respond_with Favorite.new
  end

  def create
    fav = Favorite.create(favorite_params)
    fav.user_id = current_user.id.to_i
    fav.save
    respond_with fav
  end

  def updated
    fav = Favorite.find(params[:id])
    fav.update(favorite_params)
    fav.user_id = current_user.id.to_i
    fav.save
    respond_with fav
  end

  def destroy
    respond_with Favorite.destroy(params[:id])
  end

  private
    def favorite_params
      params.require(:favorite).permit(:breed, :url)
    end
end
