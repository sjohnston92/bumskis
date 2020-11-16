import React from 'react';
import {Card} from "react-bootstrap"
import styled from "styled-components"
import {Link} from "react-router-dom"

const Posts = () => {

return(
<StyledPost className="coffeeShopRender">
        <PostImage url="https://images.unsplash.com/photo-1498146831523-fbe41acdc5ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <PostTitle>
          <Link to={`/post/post.id`}>Post Name</Link>
        </PostTitle>
        <PostMainBodyText>
           $50
          <br/> 
          Buy Sell Rent Trade
          <br />
          Area: Snowbird
        </PostMainBodyText>
 </StyledPost>

)
}

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
  width: 200px;
  height: 200px;
  margin-bottom: 2rem;
`;


const PostImage = styled.div`
  width: 200px;
  height: 135px;
  flex-shrink: 0;
  border-radius: 30px 30px 0 0;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const PostTitle = styled.div`
  font-family: Open Sans;
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

const PostMainBodyText = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 15px;
  padding-right: 20px;
`;

export default Posts;