import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Comments from "../comments/Comments";
import CommentForm from "../comments/CommentForm"

import { Row, Col,Container, Button ,Modal} from "react-bootstrap";
import PostForm from "./PostForm"


const PostView = ({ match,history }) => {
  const [post, setPost] = useState({});
  const [showEditPostForm,setEditShowpostForm] = useState(false)
  const [showSure,setShowSure] = useState(false)


  const handleEditPostFormClose = () => setEditShowpostForm(false)
  const handleEditPostFormOpen = () => setEditShowpostForm(true)

  const handleSureClose = () => setShowSure(false)
  const handleSureOpen = () => setShowSure(true)

  const getPost = async () => {
    try {
      let res = await axios.get(`/api/posts/${match.params.id}`);
      setPost(res.data);
    } catch (err) {
      console.log(err.response);
      alert("Error: Failed to get post");
    }
  };



  const handlePostDelete = () => {
    debugger;
    axios
      .delete(`/api/posts/${match.params.id}`)
      .then((res) => {
        history.push("/search")
        }
      )};

  const handleEditPost = (fig) => {
    const newPost = fig;
    if (newPost.id === post.id)return setPost(newPost);
    else return post;
  }

  
  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <ProductImage url="https://images.unsplash.com/photo-1498146831523-fbe41acdc5ad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c25vd2JvYXJkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        </Col>
        <Col>
          <h1>Title:{post.title}</h1>
          <h2>${post.price}</h2>
          <h3>Size:{post.size}</h3>
          <h3>Description:{post.body}</h3>
         <Button onClick={handleEditPostFormOpen}>Edit Post</Button> 
             <Modal show={showEditPostForm} onHide={handleEditPostFormClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit your Post!</Modal.Title>
             </Modal.Header>
            <Modal.Body>

                <PostForm post={post} edit={handleEditPost} hide={handleEditPostFormClose} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleEditPostFormClose}>
                Cancel
              </Button>
            </Modal.Footer>
            </Modal> 
          <Button onClick={handleSureOpen}>Delete </Button>
          <Modal show={showSure} onHide={handleSureClose}>
              <Modal.Header closeButton>
             </Modal.Header>
            <Modal.Body>
               Are you sure you want to delete your Post? 
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handlePostDelete}>
                Yes, Delete
              </Button>
              <Button variant="secondary" onClick={handleSureClose}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal> 

        </Col>
      </Row>
      <Row>
        <CommentArea>
          <Comments  post={match.params.id}/>
        </CommentArea>
      </Row>
    </Container>
  );
};

const CommentArea = styled.div`
  justify-content: center;
  text-align:center;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
  margin: 1rem;
`;


const ProductImage = styled.div`
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 30px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default PostView;
