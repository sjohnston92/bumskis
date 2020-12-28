import React,{useState,useEffect} from 'react';
import axios from "axios"
import {Button} from 'react-bootstrap'
import styled from "styled-components"
import Comment from './Comment'
import CommentForm from './CommentForm'



const Comments = ({post}) => {
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const [displayState,setDisplayState] = useState(false)


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


  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment)=> comment.id !== id))
  }


  const addComment = (comment) => {
    setComments([comment,...comments])
  }


  const handleEditComment = (c) => {
    const newComment = comments.map((comment) => {
      if (c.id === comment.id) return newComment;
      else return comment;
    });
    setComments(c);
  };
  


  const renderComments = () => {
    return comments.map((comment) => <Comment key={comment.id} post={post} comment={comment} deleteComment={handleDeleteComment} />)

  };





return (
<>
<Button onClick={() => setDisplayState(true)}>{!displayState ? "Add a Comment":"Cancel"} </Button>
          <CommentForm add={addComment} afterUpdate={handleEditComment}post={post} display={!displayState ? "none" : "block"}/>
          <Button> Cancel </Button>

<div>
{renderComments()}
</div>
</>
)


}



export default Comments;