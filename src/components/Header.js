import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons'; 

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <List size={24} />
        </Navbar.Toggle>
        <Navbar.Brand href="#home" className="mx-auto">
          Portfolio Website (Community)
        </Navbar.Brand>
        <Nav className="ms-auto">
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;