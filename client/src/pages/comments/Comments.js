import React,{useState,useEffect} from 'react';
import axios from "axios"
import {Button,Modal,Row} from 'react-bootstrap'
import styled from "styled-components"
import Comment from './Comment';
import CommentForm from './CommentForm'
import {FaCommentsDollar} from "react-icons/fa";



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
<Row style={{justifyContent:'center',width:'90%', margin:'15px'}}>
<Button block variant="success" onClick={handleShow}>
          <FaCommentsDollar style={{margin:'5px', fontSize:'25px'}}/> Add A Comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommentForm style ={{width:'40px'}}add={addComment} afterUpdate={handleEditComment}post={post} display={!displayState ? "none" : "block"}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
</Row>
<CommentArea>
{renderComments()}
</CommentArea>
</>
)

}


const CommentArea = styled.div`
  justify-content: center;
  padding-bottom: 15px;
  text-align:center;
  display: flex;
  width:90%;
  flex-direction: column;
  transition: 0.3s;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
  margin: 1rem;
`;



export default Comments;