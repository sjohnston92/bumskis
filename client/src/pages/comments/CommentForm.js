import axios from 'axios';
import React, {useContent,useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import {AuthContext} from "../providers/AuthProvider"

const CommentForm = () =>{
  const [comment,setComment] = useState(
    commentProp ? {price: commentProp.price, body: commentProp.body}:{price: "", body:""}
    )


    const handleSubmit = (e) => {
      console.log("submitted")
    }


    const handleChange = (e) => {
      setComment({...comment,[e.target.name]:e.target.value})
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
