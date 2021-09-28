import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './Menu.scss';

const Menu = ({genList}) => {
  
  let history = useHistory();
  
  const handleClick=(e)=>{
    history.push(`/${e.generacion}-gen`);
  }

  console.log(genList)
    return ( <>
        <NavDropdown
          id="nav-dropdown"
          title="Generations"
          className="menu"
        >
          {genList.map((e,index)=><NavDropdown.Item eventKey={e.link} onClick={(g)=>handleClick(e)} key={index} className="menu-item" href="#">{e.generacion} Gen</NavDropdown.Item>)}
        </NavDropdown>
        </>
     );
}
 
export default Menu;
