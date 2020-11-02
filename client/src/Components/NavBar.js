import React, {useContext}from 'react';
import {Nav,Navbar, NavDropdown} from 'react-bootstrap';
import {AuthContext} from '../providers/AuthProvider'
import Logo from './images/1x/bumskiLogo.png'
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
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-end">
<Navbar.Brand style={{paddingRight:"65%",paddingLeft: "5px"}}href="#home"><img style={{width:"100px"}}src={Logo}/></Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav  activeKey="/home">
<Nav.Item>
  {user && <Nav.Link href="/home">Home</Nav.Link>}
</Nav.Item>
<Nav.Item>
  {user && <Nav.Link href="/about">About</Nav.Link>}
</Nav.Item>
<Nav.Item>
  {user && <Nav.Link href="/map">Map</Nav.Link>}
</Nav.Item>
<NavDropdown title="BumSkis Profile" id="basic-nav-dropdown">
{getRightNav()}
</NavDropdown>
</Nav>
</Navbar.Collapse>
</Navbar>

)
}

export default NavBar;











