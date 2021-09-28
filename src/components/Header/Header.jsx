import React from 'react'
import Menu from '../Menu/Menu';
import { Navbar, Container } from 'react-bootstrap';
import './Header.scss';
import { useHistory } from 'react-router';

const Header = ({genList}) => {

  let history = useHistory();

  const home = () => {
    history.push("/");
  }

    return (
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" onClick={home}>
      Pokédex</Navbar.Brand>
          <Menu genList={genList}/>
        </Container>
      </Navbar>
    );
    
}
export default Header;

