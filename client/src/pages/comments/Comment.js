import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Button,Modal} from "react-bootstrap";
import styled from "styled-components";

const Comment = ({comment,deleteComment,post}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteComment = () => {
    debugger
    axios
    .delete(`/api/posts/${post}/comments/${comment.id}`)
    .then((res) =>{
      setShow(false)
      deleteComment(comment.id);
    })
    .catch(err => {
      console.log(err)
    })
  }

return(
  <>
  <h4>We need to bring in user information
       right here  </h4>

  <h5>{comment.price}</h5>
  <p>{comment.body}</p>
  <Button>Edit </Button>
  <Button onClick={handleShow}>Delete</Button>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your comment</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteComment}>
            Yes,Delete
          </Button>
        </Modal.Footer>
      </Modal>
  </>
)

}



export default Comment;