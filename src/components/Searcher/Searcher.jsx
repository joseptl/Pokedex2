import React, {useState, useEffect, useRef} from 'react';
import { Container, Form, Row, Col, NavDropdown} from 'react-bootstrap';
import './Searcher.scss';


const typeList = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dark",
    "dragon",
    "steel",
    "fairy",
  ];

const Searcher = ({handleClick, handleChange, formValues, handleReset}) => {
    const [top, setTop] = useState(false);
    const containerForm = useRef(null);

    const changeShadow = () => {
        if(window.scrollY>=63){
            setTop(true)
        };
        if(window.scrollY<63){
            setTop(false)
        };
    };


    useEffect(e=>{
        window.addEventListener('scroll', changeShadow);
        return ()=>window.removeEventListener('scroll', changeShadow);
    },[])

    return ( 
    <Container ref={containerForm} fluid className={`p-2 searcher ${top&&"fixed"}`}>
        <Form>
            <Row>
                <Col sm={12} md={4} className="form-col">
        <Form.Group controlId="name">
            <Form.Control type="text" placeholder="Name" name="name" onChange={handleChange} value={formValues.name}/>
        </Form.Group>
            {formValues.name!==""&&<button className="reset fas fa-times" name="name" onClick={handleReset}></button>}
                </Col>
                <Col className="pr-1 pl-1 dropdown-container">
                    <div className="dropdown-div">

                <NavDropdown
          id="type_1"
          title={`${formValues.type1 === ""
          ? "Type 1"
          : formValues.type1[0].toUpperCase() +
          formValues.type1.slice(1)}`}
          className="form-dropdown"
          >
            {typeList.map(e=><NavDropdown.Item name="type1" onClick={(el) => handleClick(el, e)} key={typeList.indexOf(e)} className="form-dropdown-item" href="#" value={e}>{e[0].toUpperCase() +
            e.slice(1)}</NavDropdown.Item>)}
        </NavDropdown>
        {formValues.type1!==""&&<button className="reset fas fa-times" name="type1" onClick={handleReset}></button>}
            </div>
                </Col>
                <Col className="pr-1 pl-1 dropdown-container">
                    <div className="dropdown-div">
                <NavDropdown
          id="type_2"
          title={`${formValues.type2 === ""
          ? "Type 2"
          : formValues.type2[0].toUpperCase() +
          formValues.type2.slice(1)}`}
          className="form-dropdown"
          >
            {typeList.map(e=><NavDropdown.Item name="type2" className="form-dropdown-item" href="#" onClick={(el) => handleClick(el, e)} key={typeList.indexOf(e)} value={e}>{e[0].toUpperCase() +
            e.slice(1)}</NavDropdown.Item>)}
        </NavDropdown>
        {formValues.type2!==""&&<button className="reset fas fa-times" name="type2" onClick={handleReset}></button>}
            </div>
                </Col>
                </Row>
        </Form>
    </Container> );
}
 
export default Searcher;