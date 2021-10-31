import React from 'react';
import { Container, Navbar, NavBar } from 'react-bootstrap';

const NavBarCom = () => {
    return (
        <NavBar sticky='top' bg='primary' variant='dark'>
            <Container>
                <Navbar.Brand href='#home'>Contact Form</Navbar.Brand>
            </Container>
        </NavBar>
    )
}

export default NavBar
