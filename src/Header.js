import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'

  
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href="./">Test App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="./Inventory">Inventory</Nav.Link> 
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
  );
};
  
export default Header;