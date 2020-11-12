import React,{useState} from 'react';
import {Button, Container,Form} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import styled from "styled-components"


const Lander = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?name=${query}`);
  };

  return(
  <div >
    <div className="landing">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label style={{ color: "black", width: "100%" }}>
            <StyledSearchText>
              Buy. Sell. Trade. & Rent. 
            </StyledSearchText>
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





const StyledSearchText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 44px;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
`;

export default Lander;
