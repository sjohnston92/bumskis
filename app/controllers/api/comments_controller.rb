class Api::CommentsController < ApplicationController
  before_action :authenticate_user!, only: [ :create, :update, ]
  before_action :set_post, only: [ :show, :index, :create, :destroy, :update ]
  before_action :set_comment, only: [ :update, :show, :edit, :destroy ]

  def index
    render json: @post.comments
  end

  def show
    render json: @comment
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: 422
    end
  end

  def destroy
    comment = @comment.destroy
    render json: "Deleted"
  end



  private

  def comment_params
    params.permit(:post_id, :user_id, :body, :price, )
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def set_post
    @post = Post.find(params[:post_id])
  end
end
