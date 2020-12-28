import axios from 'axios';
import React, {useContext, useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import {AuthContext} from "../../providers/AuthProvider";

const CommentForm = ({post,add,commentProp,afterUpdate}) =>{
    const auth = useContext(AuthContext);
  const [ comment, setComment ] = useState(
    commentProp ? 
    {price: commentProp.price,
     body: commentProp.body, 
     user_id: auth.user.id,}
    :
    {price:"", 
     body:"",
     user_id: auth.user.id,}
    )


    
    const addComment = async () => {
      debugger;
        try{
            let res = await axios.post(`/api/posts/${post}/comments`, comment);
            add(res.data);
        }
          catch(err){
            alert("Oh shit, add comment doesn't work")
        }
      }
    


    const editComment = async () => {
      debugger
      try{
        let res = await axios.put(`/api/posts/${post}/comments/${commentProp.id}`, comment);
        if(typeof afterUpdate === "function") afterUpdate(res.data);
      } 
        catch (err){
          alert('Oh shit, edit comment doesnt work')
      }
    }


    const handleChange = (e) => {
      setComment({...comment, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(commentProp){
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
      <Form.Label>Text Area</Form.Label>
      <Form.Control
      autoFocus
      placeholder="Leave a comment here...."
      name="body"
      value={comment.body}
      onChange={handleChange}
      />
      </Form.Group>
      
      <Button varient="success" type="submit" onClick={handleSubmit}>Submit</Button>
    </Form>
    </>
  )
}


export default CommentForm;
