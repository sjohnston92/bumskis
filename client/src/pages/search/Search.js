import React from "react";
import { Row, Col,Button } from "react-bootstrap";
import Map from "../../components/Map.js";
import Posts from "../posts/Posts.js";

const Search = () => {
  return (
    <>
      <Row>
        <Col sm={8} style={{ justifyContent: "center" }}>
          <Row>
            <Posts />
          </Row>
        </Col>
        <Col sm={4}>
          <Map />
        </Col>
      </Row>
    </>
  );
};

export default Search;
