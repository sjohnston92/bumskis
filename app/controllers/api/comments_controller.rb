class Api::CommentsController < ApplicationController
before_action :set_post, only: [:index,:create, :destroy, :update]
before_action :set_comment, only: [:update, :edit, :destroy]

def index
  render json: @posts.comments
end



def destroy
  comment = @comment.destroy
  render json: "Deleted"
end



private

def set_comment
  @comment = @post.find(params[:id])
end

def set_post
  @post = Posts.find(params[:posts_id])
end


end