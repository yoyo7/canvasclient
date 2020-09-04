import React from "react";
import "./TopNavBar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
const TopNavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Canvas App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
         
          <NavDropdown title="Actions" id="basic-nav-dropdown">
            <NavDropdown.Item href="/key">
              Change Key
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Settings
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavBar;
