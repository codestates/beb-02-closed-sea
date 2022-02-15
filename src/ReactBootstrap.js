import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Row,Col } from 'react-bootstrap';


function ReactBootstrap() {
    // mouse hover시 자동 드랍다운
    const [show,setShow] = useState(false)
    const showDropdown = (e) => {
        setShow(true)
    }
    const hideDropdown = (e) => {
        setShow(false)
    }

    return (
        <div className='reactbootstrap'>
            {/* <Button>bootstrap</Button> */}

            {/* <Navbar bg="light" expand="lg">
                <Container fluid>    
                    <Navbar.Brand href="#">
                        <img className = "LogoStyle" alt="OpenSea Logo" src="closedsea.svg" decoding="async" data-nimg="fill"  />
                        <strong>&nbsp;&nbsp;Closed Sea</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />                                                    
                    <Navbar.Collapse id="navbarScroll">                      
                        <Form className="d-flex me-auto w-50">
                            <FormControl
                                    type="search"
                                    placeholder="Search items, collections, and accounts"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        <Nav.Link href="#action1">&nbsp;Expolore&nbsp;</Nav.Link>
                        <Nav.Link href="#action2">&nbsp;Stats&nbsp;</Nav.Link>
                        <Nav.Link href="#action2">&nbsp;Resources&nbsp;</Nav.Link>
                        <Nav.Link href="#action2">&nbsp;Create&nbsp;</Nav.Link>
                        <NavDropdown title="Account" id="navbarScrollingDropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">My Collections</NavDropdown.Item>                        
                        </NavDropdown>
                        <Nav.Link href="#action2">&nbsp;Wallet&nbsp;</Nav.Link>
                        </Nav>  
                                      
                    </Navbar.Collapse>                   
                </Container>
            </Navbar> */}

            <Navbar bg="light" expand="lg" className='bottomShadow'>
                <Container fluid>  
                     
                    <Navbar.Brand href="#">
                        <img className = "LogoStyle" alt="OpenSea Logo" src="closedsea.svg" decoding="async" data-nimg="fill"  />
                        <strong>&nbsp;&nbsp;Closed Sea</strong>
                    </Navbar.Brand>                    
                    <Navbar.Toggle aria-controls="navbarScroll" />                                                    
                    <Navbar.Collapse id="navbarScroll">
                        <div className='blank'></div>                  
                        <Form className="d-flex me-auto w-50">
                            <FormControl
                                    type="search"
                                    placeholder="Search items, collections, and accounts"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        
                        <Nav
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        <Nav.Link href="#action1">&nbsp;Expolore&nbsp;</Nav.Link>
                        <Nav.Link href="#action2">&nbsp;Stats&nbsp;</Nav.Link>
                        <Nav.Link href="#action3">&nbsp;Resources&nbsp;</Nav.Link>
                        <Nav.Link href="#action4">&nbsp;Create&nbsp;</Nav.Link>
                        <NavDropdown title="Account" id="navbarScrollingDropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                            <NavDropdown.Item href="#action5">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action6">My Collections</NavDropdown.Item>                        
                        </NavDropdown>
                        <Nav.Link href="#action7">&nbsp;Wallet&nbsp;</Nav.Link>
                        </Nav>  
                                      
                    </Navbar.Collapse>  
                                     
                </Container>
            </Navbar>
        </div>
    );
}

export default ReactBootstrap;