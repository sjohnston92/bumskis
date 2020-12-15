import React,{useState,useEffect} from 'react';
import axios from "axios"
import {Button,Dropdown} from "react-bootstrap"
import styled from "styled-components"



const Comment = ({comment}) => {
  


return(
  <>
  <h4>We need to bring in user information
       right here  </h4>

  <h5>{comment.price}</h5>
  <p>{comment.body}</p>
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    More...
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Sold</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

  </>
)

}



export default Comment;