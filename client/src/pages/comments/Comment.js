import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Button,Modal,Row,Col} from "react-bootstrap";
import styled from "styled-components";
import CommentForm from "./CommentForm"


const Comment = ({comment,deleteComment,editComment,post}) => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const handleDeleteComment = () => {
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
  <Row style={{justifyContent:"center", alignItems:"center"}}>
  <StyledCommentBody>
  <h5>{comment.price}</h5>
  <p>{comment.body}</p>
  <Button varient="warning"onClick={handleEditShow}>Edit</Button>
  <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <CommentForm post={post} commentProp={comment} editComment={editComment}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
  <Button  varient="danger" onClick={handleShow}>Delete</Button>
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
    </StyledCommentBody>
    <StyledCommentTriangle />
    <CommentUser />
    </Row>

  </>
)

}


const StyledCommentBody = styled.div`
  margin-top: 15px;
  margin-botton: 15px;
  margin-left: 15px;
  background-color: lightgrey;
  border-radius: 25px;
  width:300px;
`;

const StyledCommentTriangle = styled.div`
  width: 0; 
  height: 0; 
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid lightgrey;
`;

const CommentUser= styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  background:red;
`;


export default Comment;