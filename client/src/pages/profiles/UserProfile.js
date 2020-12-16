import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import {Button, Modal} from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider"
import PostForm from "../posts/PostForm"

const UserProfile =()=>{
  const { user } = useContext(AuthContext);
  const [ post, setPost ] = useState([]);
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = ()  => setShow(true)

  const addPost = (post) => {
    Axios
      .post(`/api/posts/`, post)
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        alert("error in submitting post");  
      });
  }

  return(
    <>
    <Button onClick={handleShow}> Add a Post </Button>
    <Modal show={show}onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>PostForm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PostForm />
      </Modal.Body>
      <Modal.Footer>
      <Button addPost={addPost} userID={user}> Add Post</Button>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
      </Modal.Footer> 

    </Modal>
    </>
  )
}



export default UserProfile;