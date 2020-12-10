import React,{useState,useEffect} from 'react';
import axios from "axios"
import {Button} from "react-bootstrap"
import styled from "styled-components"



const Comment = ({comment}) => {
  

const commentDelete = () => {
  console.log('delete')
}



return(
  <>
  <h4>We need to bring in user information
       right here  </h4>

  <h5>{comment.price}</h5>
  <p>{comment.body}</p>
  <Button>Edit </Button>
  <Button onClick={commentDelete}> Delete </Button>
  </>
)

}



export default Comment;