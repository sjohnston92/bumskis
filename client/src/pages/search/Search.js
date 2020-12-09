import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Map from "../../components/Map.js"
import Posts from "../posts/Posts.js"


const Search = () => {

return(
    <>
    <Row>
        <Col sm={8} style={{justifyContent:"center"}}>
        <Row>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        </Row>
        </Col>
        <Col sm={4}>
<<<<<<< HEAD
=======
        <Col>
        <Posts />
        </Col>
        <Col>
>>>>>>> af0946b9b6221c3a3e10dd4828ab915d80af21be
            <Map />
        </Col>
    </Row>
    </>
)
}





export default Search;