import React from "react"
import { Nav, Navbar,Container } from "react-bootstrap"
import {Link} from 'react-router-dom';
import SearchComponent from "./SarchComponent";



const NavbarComponent =()=>
{
    return (

        <Navbar bg="dark" variant="dark" expand='lg'>
            <Container> 
                <Navbar.Brand as={Link} to="/" > Cogent</Navbar.Brand> 
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"> 
                    
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/employees" >Employee</Nav.Link>
                    <Nav.Link as={Link} to="/project" >Project</Nav.Link>
                    <Nav.Link as={Link} to="/about" >About</Nav.Link>
                    <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                    <SearchComponent/>
                    <Nav className="ml-auto ">
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>

                    </Nav>
                     </Nav>

                </Navbar.Collapse>
            </Container>
            </Navbar>
    )
}

export default NavbarComponent;