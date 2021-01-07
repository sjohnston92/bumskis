import React from "react";
import { Row, Col,Button,Container } from "react-bootstrap";
import Map from "../../components/Map.js";
import Posts from "../posts/Posts.js";

const Search = () => {
  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        <Map />
      </Row>
      <Row>
        <Col style={{ justifyContent: "center" }}>
          <Row>
            <Posts />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
