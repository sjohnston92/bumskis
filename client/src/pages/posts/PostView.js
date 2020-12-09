import React,{useState,useEffect} from 'react';
import axios from "axios"
import styled from "styled-components"
import Comments from '../comments/Comments'
import {Row,Col} from 'react-bootstrap'



const PostView = () => {
  
return(
  <>
  <Row>
  <Col>

  <h1>Hello there</h1>
  
  </Col>
  <Col>
  <p>
    Picture with all the info and related info to the post with a dash of user info 
  </p>

  </Col>
  </Row>
  <Row>
    <CommentArea>
      <Comments />
    </CommentArea>
  </Row>
  </>
)

}

const CommentArea = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
  width: 80%;
  height: 350px;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;



export default PostView;