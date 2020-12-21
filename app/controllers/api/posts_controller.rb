class Api::PostsController < ApplicationController
before_action :authenticate_user!, only: [:create,:update]

before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: Post.all
  end

  def show
    render json: @post
  end

  def create
    post = current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: 422
    end
  end

  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params

    params.permit(:user_id, :size, :location, :title, :price, :image, :sold) 

  end

end
