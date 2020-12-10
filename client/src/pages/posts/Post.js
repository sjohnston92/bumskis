import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { FaHeart, FaCommentDots } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Post = ({ post }) => {
  const history = useHistory();

  const routeChange = () => {
    history.push(`post/${post.id}`);
  };

  const heartPost = () => {
    console.log({ post });
  };

  const viewComments = () => {
    console.log("View");
  };

  return (
    <StyledPost onClick={routeChange}>
      <PostImage url="https://images.unsplash.com/photo-1498146831523-fbe41acdc5ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c25vd2JvYXJkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      <PostTitle>{post.title}</PostTitle>
      <p style={{ width: "200px" }}>
        Price: ${post.price}
        Location:{post.location}
        Size:{post.size}
        Available:{post.available}
        {/* Body:{posts.body} */}
      </p>
      <FaRow>
        <FaHeart onClick={heartPost} />
        <FaCommentDots onClick={viewComments} />
      </FaRow>
    </StyledPost>
  );
};

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
  width: 250px;
  height: 350px;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;

const PostImage = styled.div`
  width: 250px;
  height: 155px;
  flex-shrink: 0;
  border-radius: 30px 30px 0 0;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const FaRow = styled.div`
  text-align: center;
  width: 100%;
  bottom: 0;
  justify-content: space-between;
`;

const PostTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 20px;
`;

const PostBody = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  white-space: nowrap;
  padding-left: 15px;
  padding-right: 20px;
`;

export default Post;
