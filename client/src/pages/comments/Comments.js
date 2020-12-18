import React,{useState,useEffect} from 'react';
import axios from "axios"
import {Modal,Button} from 'react-bootstrap'
import styled from "styled-components"
import Comment from './Comment'
import CommentForm from './CommentForm'



const Comments = ({post}) => {
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const getComments = async() => {
    try{
      let res = await axios.get(`/api/posts/${post}/comments`);
      setComments(res.data);
    }catch (err) {
      console.log(err.response);
      alert("Error: Failed to get Comments");
    }
  }



  useEffect(()=>{
    getComments()
  },[])



  // const addComment = () => {
  //   setComments([comment,...comments])
  // }

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment)=> comment.id !== id))
  }

  // const handleEditComment = (newComment) => {
  //   const newComment = comments.map((comment) => {
  //     if (newComment.id === comment.id) return newComment;
  //     else return comment;
  //   });
  //   setComments(newComment);
  // };
  


  const renderComments = () => {
    return comments.map((comment) => <Comment key={comment.id} post={post} comment={comment} deleteComment={handleDeleteComment} />)

  };



return (
<>
<Button variant="success" onClick={handleShow}>
        Add a Comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <CommentForm post={post} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

<div>
{renderComments()}
</div>
</>
)


}



export default Comments;