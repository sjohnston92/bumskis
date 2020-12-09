import React,{useState,useEffect} from 'react';
import axios from "axios"
import styled from "styled-components"
import Comments from '../comments/Comments'



const PostView = () => {
  
return(
  <>
  <h1>Hello there</h1>
  <p>
    Picture with all the info and related info to the post with a dash of user info 
  </p>


  <Comments />
  </>
)

}



export default PostView;