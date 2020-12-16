class Api::CommentsController < ApplicationController
  before_action :authenticate_user!, only: [ :create, :update, :destroy, ]
  before_action :set_post, only: [:index,:create, :destroy, :update]
  before_action :set_comment, only: [:update, :edit, :destroy]

  def index
    render json: @post.comments
  end

  def show
    render json: @post.comments.all
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
    @comment.destroy
    render json: "Deleted"
  end



  private

  def comment_params
    params.require(:comment).permit(:post_id, :user_id, :body, :price, )
  end

  def set_comment
    @comment = @post.find(params[:id])
  end

  def set_post
    @post = Post.find(params[:post_id])
  end
end
