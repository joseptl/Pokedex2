import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import './Menu.scss'

const Menu = () => {
    return ( <>
        <NavDropdown
          id="nav-dropdown"
          title="Generations"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        </NavDropdown>
        </>
     );
}
 
export default Menu;
