import React,{useState,useEffect} from 'react';
import axios from "axios"
import styled from "styled-components"
import Comment from './Comment'



const Comments = () => {
  const [comments, setComments] = useState([]);
  



//Started the render/read function wont work till we get a get request going with the backend
const renderComments = () => {
  return comments.map((comment) => (
    <Comment/>
  ));
};



return(
  <>
  <h1>Comments</h1>
  <Comment/>
  </>
)

}



export default Comments;