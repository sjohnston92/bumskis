import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import {Button,Modal,Row} from 'react-bootstrap'
import Post from "./Post";
import PostForm from "./PostForm"
import {FaCommentDollar} from "react-icons/fa";
import InfiniteScroll from 'react-infinite-scroll-component';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showPostForm,setShowpostForm] = useState(false)


  const handlePostFormClose = () => setShowpostForm(false)
  const handlePostFormOpen = () => setShowpostForm(true)

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

  const renderPost = () => {
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  const addPost = (post) => {
    setPosts([post,...posts])
  }






  return(
  <>
  <Row style={{justifyContent:'center',width:'100%', margin:'15px'}}>
      <Button block variant="success"onClick={handlePostFormOpen}><FaCommentDollar style={{margin:'5px'}}/>ADD POST</Button>
  
  <Modal show={showPostForm} onHide={handlePostFormClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your Listing!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostForm hide={handlePostFormClose} add={addPost}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePostFormClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

      
  </Row>

  <Row>
  {renderPost()}
  </Row>
  </>
  );
};

const ButtonCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:25%;
  margin-bottom:25%;

`;

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
