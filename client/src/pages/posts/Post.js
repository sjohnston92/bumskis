import React from "react";
import styled from "styled-components";
import {Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {FaMapMarkerAlt,FaRulerHorizontal} from "react-icons/fa";

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
      <Container>
        <PriceNumber>${post.price}</PriceNumber>
        <PostTitle>{post.title}</PostTitle>
        <p style={{fontSize:'8px',textAlign:'center', marginBottom: '0px'}}>{post.body}</p>
        <PostBody>
        <br/>
        <FaMapMarkerAlt />{post.location}
        <br/>
        <FaRulerHorizontal/> Size:{post.size}
        </PostBody>
        
      
      </Container>
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


const PostTitle = styled.div`
  text-align:center;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 20px;
`;

const PriceNumber = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 20px;
`;

const PostBody = styled.p`
 font-style: normal;
 font-weight: bold;
 font-size: 14px;
 overflow: hidden;
 white-space: nowrap;
 text-overflow: ellipsis;
 text-align:center;
 padding-left: 15px;
 padding-right: 20px;
`;

export default Post;
