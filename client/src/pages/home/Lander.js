import React,{useState} from 'react';
import {Form,Container,Row} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import SnowStorm from "react-snowstorm"
import Ride from '../../components/images/ride.png'


const Lander = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?name=${query}`);
  };




  return(
  
  <>
    <SnowStorm />
    <Container>
    <div className="landing">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label style={{ color: "black", width: "100%" }}>
            <StyledSearchText>
              Buy. Sell. Trade. & Rent. 
            </StyledSearchText>
            <StyledSearchBody>
            Find all your winter gear at your next ski destination. Search the ski destination to view avaliable listings in that area
            </StyledSearchBody>
          </Form.Label>
          <MainInput
            className="form"
            autoFocus
            placeholder="E.g. ‘Jackson Hole’, ‘Breckenridge’, ‘Killington’"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      </Form>
      </div>
      </Container>
      <Row>
      <StyledPromo url={Ride}>
        <StyledPromoText>
         <p> Enjoy your Winter with BumSkis</p> 
        </StyledPromoText>
      </StyledPromo>
      </Row>
  </>
  )
}

const MainInput = styled(Form.Control)`
  padding: 1.5rem;
  border-radius: 15px 50px;
`;

const StyledPromo = styled.div`
  margin-top: .5%;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const StyledSearchBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Noto Sans', sans-serif;
  color: white;
  text-shadow: 1px 1px #f7436a, 
  2px 2px #f7436a, 
  3px 3px #f7436a;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
 
`;

const StyledSearchText = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Noto Sans', sans-serif;
  color: white;
  text-shadow: 1px 1px #f7436a, 
                2px 2px #f7436a, 
                3px 3px #f7436a;
}
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
`;


const StyledPromoText = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Permanent Marker', cursive !important;
  color: white;
  text-align:center;
  margin-bottom: 1rem;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 44px;
  margin-top: 25rem;
  padding: 0 0.5rem;
`;


const Wrapper = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  flex-shrink: 0;
  margin-top: 5%;
  margin-bottom: 5%;
  background-image: linear-gradient(to right,#f7436a, #a3cef1);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;



export default Lander;
