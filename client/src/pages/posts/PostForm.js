import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import {AuthContext} from "../../providers/AuthProvider"

const PostForm = ({post, hide, add}) =>{
  const auth = useContext(AuthContext);
  const [postState, setPostState] = useState(
    post ? {
      user_id: auth.user.id,
      price: post.price,
      title: post.title,
      location: post.location,
      size: post.size,
    }  :
    {

      price: 0,
      title: '',
      location: '',
      size: '',
      user_id: auth.user.id,
    }
);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   addPost({ title: title, image: image, price: price, location: location, size: size, })
  // }

    const handleChange = (e) => {
      setPostState({ ...postState, [e.target.name]: e.target.value });
    };

    const addPost = async () => {
      console.log(postState.title)
      debugger
      try {
        let res = await axios.post(`/api/posts`, postState);
        add(res.data)
      } catch (err) {
      alert("ERROR: add post doesn't work")
    }
  }

    const editPost = async () => {
      try {
        let res = await axios.put(
          `/api/posts/${post}`
        );
      } catch (err) {
      alert("ERROR: EDIT post doesnt work")
    }
  }

    const handleSubmit = (e) => {
      e.preventDefault();
      if (post) {
        editPost();
      } else {
        addPost()
      }
    }
 
  // const handleChange = (e) => {
  //   console.log("change")
  // }

  return(
    <>
      {/* <Modal show={editShow} onHide={handleEditClose}></Modal> */}
    <Form onSubmit={handleSubmit}>
      <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control
      autoFocus
      name="title"
      value={postState.title}
      onChange={handleChange}
      />
      </Form.Group>
      <Form.Group>
      <Form.Label>Image</Form.Label>
      <Form.Control
      name="image"
      value={postState.image}
      onChange={handleChange}
      />
      </Form.Group>
       <Form.Group>
      <Form.Label>Price</Form.Label>
      <Form.Control
      name="price"
      value={postState.price}
      onChange={handleChange}
      />
      </Form.Group>
       <Form.Group>
      <Form.Label>Location</Form.Label>
      <Form.Control
      name="location"
      value={postState.location}
      onChange={handleChange}
      />
      </Form.Group>
      <Form.Group>
      <Form.Label>Size</Form.Label>
      <Form.Control
      name="size"
      value={postState.size}
      onChange={handleChange}
      />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
    </>
  )
}



export default PostForm;