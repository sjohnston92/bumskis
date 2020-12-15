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

  return(
    <>
    <Button onClick={handleShow}> Add a Post </Button>
    <Modal show={show}onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>PostForm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PostForm hide={handleClose}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cancel</Button>
      </Modal.Footer> 

    </Modal>
    </>
  )
}



export default UserProfile;