import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function BasicExample() {
  return (    
    <Navbar expand="md" className="row p-0 m-0">
      <Nav className="py-3 col-md-4 border border-dark justify-content-center">
        <Navbar.Brand as={Link} to="/">LOREM IPSUM</Navbar.Brand>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="py-3 col-md-8 border border-dark justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/">LINK1</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;
