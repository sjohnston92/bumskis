import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      let res = await axios.get(`/api/posts/`);
      setPosts(res.data);
    } catch (err) {
      console.log(err.response);
      alert("Error: Failed to get posts");
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  //Started the render/read function wont work till we get a get request going with the backend
  const renderPost = () => {
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  return <>{renderPost()}</>;
};

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
