import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Comments from "../comments/Comments";
import { Row, Col } from "react-bootstrap";

const PostView = ({ match }) => {
  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      let res = await axios.get(`/api/posts/${match.params.id}`);
      setPost(res.data);
    } catch (err) {
      console.log(err.response);
      alert("Error: Failed to get post");
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <p>
            Picture with all the info and related info to the post with a dash
            of user info
          </p>
        </Col>
        <Col>
          <h1>${post.title}</h1>
        </Col>
      </Row>
      <Row>
        <CommentArea>
          <Comments />
        </CommentArea>
      </Row>
    </>
  );
};

const CommentArea = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.35);
  border-radius: 30px;
  width: 80%;
  height: 350px;
  margin: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;

export default PostView;
