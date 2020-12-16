import React,{useState,useEffect} from 'react';
<<<<<<< HEAD
import axios from "axios"
import {Button,Dropdown} from "react-bootstrap"
import styled from "styled-components"



const Comment = ({comment}) => {
  

=======
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
>>>>>>> aa38bfd3cbd092dccc494bdf005102a0457313f7

return(
  <>
  <h4>We need to bring in user information
       right here  </h4>

  <h5>{comment.price}</h5>
  <p>{comment.body}</p>
<<<<<<< HEAD
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    More...
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Sold</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
=======
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
>>>>>>> aa38bfd3cbd092dccc494bdf005102a0457313f7

  </>
)

}



export default Comment;