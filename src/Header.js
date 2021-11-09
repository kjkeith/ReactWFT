import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

  
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark'>
          <Container fluid>
            <Navbar.Brand as={Link} to="/ReactWFT/">Test App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav >
                <Nav.Link as={Link} to="/ReactWFT/inventory">Inventory</Nav.Link> 
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  );
};

export default Header;