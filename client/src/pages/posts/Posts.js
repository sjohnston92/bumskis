import React,{useState,useEffect} from 'react';
import axios from "axios"
<<<<<<< HEAD:client/src/Components/Posts.js
import {Row,Col} from "react-bootstrap"
=======
>>>>>>> c6f4ee06287f8148840cbf70f0b185241e5271cd:client/src/pages/posts/Posts.js
import styled from "styled-components"
import Post from "./Post"


const Posts = () => {
  const [posts, setPosts] = useState([]);

<<<<<<< HEAD:client/src/Components/Posts.js








return(

=======
>>>>>>> c6f4ee06287f8148840cbf70f0b185241e5271cd:client/src/pages/posts/Posts.js

//Started the render/read function wont work till we get a get request going with the backend
  const renderPost = () => {
    return posts.map((post) => (
      <Post/>
    ));
  };

return(
  <>
  <Post />
  </>
)

}

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
  width: 200px;
  height: 250px;
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