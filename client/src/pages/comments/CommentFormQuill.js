import axios from 'axios';
import React, {useContent,useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import ReactQuill, { Quill, Toolbar } from 'react-quill';

const CommentForm = ({post,add,commentProp}) =>{
  const [ comment, setComment ] = useState(
    commentProp ? 
    {price: comment.price,body: comment.body}
    :
    {body:""}
    )


    
    const addComment = async () => {
      debugger;
      try{
        let res = await axios.post(`/api/posts/${post}/comments`, comment);
        console.log(res);
        add(res.data);
      }
      catch(err){
        alert("Oh shit, add comment doesn't work")
      }
      }
    


    const editComment = async () => {
      try{
        let res = await axios.put(`/api/posts/${post.id}/comments/${comment.id}`, comment);
      } 
        catch (err){
          alert('Oh shit, edit comment doesnt work')
      }
    }



    


    const handleChange = (e) => {
      setComment({...comment, [e.target.name]: e.target.value});
    }


    const handleQuillChange = (value) => {
      setComment({...comment, body: value});
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
      <ReactQuill 
        theme='snow'
        label="body"
        placeholder="Leave comment here..."
        name="body"
        type="text"
        onChange={handleQuillChange}
        value={comment.body}
        formats={CommentForm.formats}
        modules={CommentForm.modules}
      />
      </Form.Group>
      <Button varient="success" type="submit">Submit</Button>
    </Form>
    </>
  )
}


export default CommentForm;
