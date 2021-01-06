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
        href="/profile"> User Profile
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
<Navbar collapseOnSelect >

  <Col>
    <Navbar.Brand href="/"><img style={{width:"200px"}}src={Logo}/></Navbar.Brand>
  </Col>
  <Col>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  activeKey="/">
  <Nav.Item>
    <Nav.Link href="/how_it_works">HOW IT WORKS</Nav.Link>
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











