import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Map from "../../components/Map.js"
import Posts from "../posts/Posts.js"


const Search = () => {

return(
    <>
    <Row>
        <Col>
        <Posts />
        </Col>
        <Col>
            <Map />
        </Col>
    </Row>
    </>
)
}





export default Search;