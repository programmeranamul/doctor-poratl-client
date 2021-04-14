import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import {
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-dark">
      <Nav.Link as={Link} to="/" className="mr-4 font-weight-bold">Home</Nav.Link>
      <Nav.Link href="#link" className="mr-4 font-weight-bold">About</Nav.Link>  
      <Nav.Link as={Link} to="/dashboard" className="mr-4 font-weight-bold">Dashboard</Nav.Link>
      <Nav.Link href="#link" className="text-white mr-4 font-weight-bold">Reviews</Nav.Link> 
      <Nav.Link href="#home" className="text-white mr-4 font-weight-bold">Blog</Nav.Link>
      <Nav.Link href="#link" className="text-white mr-4 font-weight-bold">Contact Us</Nav.Link>    
    </Nav>   
  </Navbar.Collapse>
</Navbar>
  );
};

export default NavBar;
