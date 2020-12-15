import React, { useState, useContext } from "react";
import axios from "axios";

import { AuthConsumer, AuthContext } from "../../providers/AuthProvider";

const PostForm = (props) => {
  const { user } = useContext(AuthContext);
  const [ image, setImage ] = useState('');
  const [ sold, setSold ] = useState(false);
  const [ price, setPrice ] = useState(0);
  const [ title, setTitle ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ size, setSize ] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.addPost({user_id: userID, image: image, sold: false, price: price, title: title, location: location, size: size, });
  // }

  // const handleChange
  
  return(
    <>
    Hello
    </>
  )
  //Add Post fields here to create state
};
export default PostForm;