import axios from 'axios';
import React, {useContent,useState} from 'react';
import {Form,Button} from 'react-bootstrap';

const CommentForm = ({post}) =>{
  const [comment,setComment] = useState(
    comment ? 
    {price: comment.price,body: comment.body}
    :
    {price: "", body:""}
    )


    
    const addComment = async() => {
      try{
        let res = await axios.post(`/api/posts/${post}/comments`, comment);
        if(typeof addComment === "function") addComment(res.data);
      }
      catch(err){
        alert("Oh shit, add post doesnt work")
      }
      }
    


    const editComment = async () => {
      try{
        let res = await axios.put(`/api/posts/${post.id}/comments/${comment.id}`, comment);
      } 
        catch (err){
          alert('Oh shit, edit post doesnt work')
      }
    }






    const handleChange = (e) => {
      setComment({...comment,[e.target.name]:e.target.value})
    }


    const handleSubmit = (e) => {
      e.preventDefault();
      if(comment){
        editComment();
      }else{
        addComment();
      }

      }
    


  return(
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
      <Form.Label>Price</Form.Label>
      <Form.Control
      autoFocus
      name="price"
      value={comment.price}
      onChange={handleChange}
      />
      </Form.Group>
      <Form.Group>
      <Form.Label>Description</Form.Label>
      <Form.Control
      autoFocus
      name="body"
      value={comment.body}
      onChange={handleChange}
      />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
    </>
  )
}


export default CommentForm;
