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
    <Row>
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
        Some text goes here
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
        Some text goes here
      </StyledText2>
      </Col>
    </Row>
    <Row>
      <Col>
      <StyledText1>
        Some text goes here
      </StyledText1>
      </Col>
      <Col>
      <StyledImage1 url={SnowBoard}/>
<<<<<<< HEAD
      
      
      </Col>
    </Row>
=======
      </Col>
    </Row>
    <br />
    <br />
>>>>>>> 57c96f94349d31fd7aba4d6d3b750117f80bc293

  </Container>
  </>
)
const IntroText = styled.div`
  text-align:center;
  margin-left: 100px;
  margin-right: 100px;
`;

const StyledText1 = styled.div`
text-align:center;
border-radius: 25px;
margin: 15px;
justify-content: center;
align-items: center;
width: 500px;
height: 400px;
<<<<<<< HEAD
background:red;
=======
background-color:#2491D9;
opacity: 0.7;
>>>>>>> 57c96f94349d31fd7aba4d6d3b750117f80bc293
`
const StyledText2 = styled.div`
text-align:center;
margin: 15px;
border-radius: 25px;
justify-content: center;
align-items: center;
width: 500px;
height: 400px;
<<<<<<< HEAD
background:red;
=======
background-color:#f7436a;
opacity: 0.7;
>>>>>>> 57c96f94349d31fd7aba4d6d3b750117f80bc293
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