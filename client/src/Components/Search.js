import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Map from "./Map.js"
import Posts from "./Posts.js"


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