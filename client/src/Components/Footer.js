import React from 'react';
import styled from "styled-components";
import {Col,Row} from 'react-bootstrap'
import {FaTwitter, FaInstagram,FaPinterestP,FaFacebookF } from "react-icons/fa";


const Footer = () => (
<Wrapper>
  <SocialBox>
   CONNECT WITH US 
    <IconBox>
      <FaFacebookF style={{margin:'10px'}}/>  
      <FaInstagram style={{margin:'10px'}}/>
      <FaTwitter style={{margin:'10px'}}/>
      <FaPinterestP style={{margin:'10px'}}/>
    </IconBox>
  </SocialBox>
</Wrapper>
)


const Wrapper = styled.div`
  background-color:#f7436a;
  width: 100%;
  height: 100px;
  bottom: 0;
  opacity: 0.7;
`;

const SocialBox = styled.div`
  margin-right:5%;
  padding-top: 2.5%;
  color: white;
  text-align: end;
  justify-content: center;
`;
const IconBox = styled.div`
margin-right:.25%;
letter-spacing: 100px;
align-content: space-between;
`;

export default Footer;

