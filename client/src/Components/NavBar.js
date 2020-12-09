import React, {useContext}from 'react';
import {Nav,Navbar, NavDropdown,Col} from 'react-bootstrap';
import {AuthContext} from '../providers/AuthProvider'
import Logo from './images/bumskiLogo.png'
import {Link,useHistory} from "react-router-dom"


const NavBar =()=> {
const history = useHistory();
const {user,handleLogout} = useContext(AuthContext)


const getRightNav = () => {
  if (user) {
    return (
      <>
      <NavDropdown.Item
        onClick={() => console.log("hello")}> User Info
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => 
        handleLogout(history)}> Log Out
      </NavDropdown.Item>
      </>
      
    );
  } else {
    return (
      < div className="userLink">
        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    );
  }
};



return (
<Navbar collapseOnSelect expand="lg">

  <Col>
    <Navbar.Brand href="/"><img style={{width:"200px"}}src={Logo}/></Navbar.Brand>
  </Col>
  <Col>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  activeKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/search">Search</Nav.Link>
  </Nav.Item>
  <NavDropdown title="BumSkis Profile" id="basic-nav-dropdown">
  {getRightNav()}
    </NavDropdown>
    </Nav>
    </Navbar.Collapse>
  </Col>
</Navbar>

)
}

export default NavBar;











