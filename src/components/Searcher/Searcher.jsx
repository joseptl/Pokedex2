import React, {useState, useEffect, useRef} from 'react';
import { Container, Form, FloatingLabel, Row, Col} from 'react-bootstrap';
import './Searcher.scss';


const Searcher = () => {
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

    window.addEventListener('scroll', changeShadow);

    useEffect(() => {
        top
        ?containerForm.current.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        :containerForm.current.style.boxShadow="none"
    }, [top])

    return ( 
    <Container ref={containerForm} fluid className="mt-2 p-2 searcher">
        <Form>
            <Row>
                <Col sm={12} md={4}>
        <Form.Group controlId="name">
            <Form.Control type="text" placeholder="Name" name="name"/>
        </Form.Group>
                </Col>
                <Col>
                <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
                </Col>
                <Col>
                <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
                </Col>
                </Row>
        </Form>
    </Container> );
}
 
export default Searcher;