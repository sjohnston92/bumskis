import React,{useState,useEffect} from 'react';
import axios from "axios"
import styled from "styled-components"
import Comment from './Comment'



const Comments = ({post}) => {
  const [comments, setComments] = useState([]);
  
  const getComments = async() => {
    try{
      let res = await axios.get(`/api/posts/${post}/comments`);
      setComments(res.data);
    }catch (err) {
      console.log(err.response);
      alert("Error: Failed to get Comments");
    }
  }



  useEffect(()=>{
    getComments()
  },[])


  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment)=> comment.id !== id))
  }

const renderComments = () => {
  return comments.map((comment) => <Comment key={comment.id} post={post} comment={comment} deleteComment={handleDeleteComment}/>)

};

return (

<div>
{renderComments()}
</div>
)


}



export default Comments;