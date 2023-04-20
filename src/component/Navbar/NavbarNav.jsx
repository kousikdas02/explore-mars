import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import marsImg from "../../assets/images/mars-icon.png"
import "./NavbaNav.scss"

const NavbarNav = () => {
    return (
        <>
            <Navbar expand='lg'>
                <Container>
                    <Navbar.Brand href='/'> <i className="logoIcon"><img src={marsImg} alt="" /></i> Explore Mars</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/rovers'>Rovers</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarNav;
