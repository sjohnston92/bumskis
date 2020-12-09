import React,{useState,useEffect} from 'react';
import axios from "axios"
import styled from "styled-components"
import Post from "./Post"


const Posts = () => {
  const [posts, setPosts] = useState([]);


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


export default Posts;