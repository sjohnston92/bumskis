import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import SnowStorm from "react-snowstorm"


const Lander = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?name=${query}`);
  };

  return(
  <div >
    <SnowStorm />
    <div className="landing">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label style={{ color: "black", width: "100%" }}>
            <StyledSearchText>
              Buy. Sell. Trade. & Rent. 
            </StyledSearchText>
            <StyledSearchBody>
            Find all your winter gear the your next ski destination. Search the ski destination to view avaliable listings in that area
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
  </div>
  )
}

const MainInput = styled(Form.Control)`
  padding: 1.5rem;
  border-radius: 15px 50px;
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

const Row = styled.div`
  display: flex;
  padding-top: 2.5% !important;
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

export default Lander;
