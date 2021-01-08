import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import styled from "styled-components"
import Skies from "../../components/images/skies.jpeg"
import Girls from "../../components/images/girls.jpeg"
import SnowBoard from "../../components/images/snowboard.jpeg"
import SnowStorm from "react-snowstorm"


const How = () =>(
  <>
  <SnowStorm />
  <Container>
    <Row style={{textAlign:'center'}}>
      <HeadText style={{marginLeft:"20%"}}>
        How to use Bumskis
      </HeadText>
    <IntroText>
    Ever wish you could actually get great afforable gear instead of buying it fullprice at the resort? Now, you can. 
    Bumskis connects you to people allowing you to easily shop from skiers and snowboarders closets.
    Have winter apperal just hanging in your closet? Want to upgrate your current kit with some new skis or goggles?
    We know the feeling. Sell what you have in your closet so that you can shop for what you really love today! Enjoy your Winter
    </IntroText>
    </Row>
    <Row>
      <Col>
      <StyledText1>
        <Text>
        <p style={{paddingTop:'100px'}}>
          1) First dig through your closet or basement and find your Winter gear your ready to part with!
        </p>
        </Text>
      </StyledText1>
      </Col>
      <Col>
      <StyledImage1 url={Skies}/>
      </Col>
    </Row>
    <Row>
      <Col>
      <StyledImage2 url={Girls}/>
      </Col>
      <Col>
      <StyledText2>
      <Text>
        <p style={{paddingTop:'110px'}}>
          2) Then Take a picture of your gear and fill out are short little form about your gear
        </p>
        </Text>
      </StyledText2>
      </Col>
    </Row>
    <Row>
      <Col>
      <StyledText1>
      <Text>
        <p style={{paddingTop:'100px'}}>
         3) Wait for a comment to get your gear out the door so you can go back to enjoying your winter!
        </p>
        </Text>
      </StyledText1>
      </Col>
      <Col>
      <StyledImage1 url={SnowBoard}/>
      </Col>
    </Row>
    <br />
    <br />

  </Container>
  </>
)
const IntroText = styled.div`
  text-align:center;
  margin-left: 100px;
  margin-right: 100px;
  font-family: sans-serif;
`;

const HeadText =styled.div`
  display:flex;
  justify-content: center;
  font-size: 50px;
  test-align:center;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-weight: 1100;
`


const Text = styled.div`
  text-align:center;
  color:white;
  font-size:30px;
  padding-right:15px;
  padding-left:15px;
  font-family: 'Permanent Marker', cursive !important;
`;

const StyledText1 = styled.div`
text-align:center;
border-radius: 25px;
margin: 15px;
justify-content: center;
align-items: center;
width: 500px;
height: 400px;
background-color:#2491D9;
opacity: 0.7;
`
const StyledText2 = styled.div`
text-align:center;
margin: 15px;
border-radius: 25px;
justify-content: center;
align-items: center;
width: 500px;
height: 400px;
background-color:#f7436a;
opacity: 0.7;
`

const StyledImage1 = styled.div`
margin: 15px;
border-radius: 25px;
justify-content: center;
align-items: center;
width: 500px;
height: 400px;
background-image: url(${(props) => props.url});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const StyledImage2 = styled.div`
margin: 15px;
border-radius: 25px;
justify-content: center;
align-items: center;
width: 500px;
height: 400px;
background-image: url(${(props) => props.url});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

export default How;