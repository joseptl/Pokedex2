import React from 'react'
import Menu from '../Menu/Menu';
import { Navbar, Container } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
      Pokédex</Navbar.Brand>
          <Menu/>
        </Container>
      </Navbar>
    );
    
}
export default Header;

