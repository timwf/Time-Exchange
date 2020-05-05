import React from 'react'
import { Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled  from 'styled-components'

const Styles = styled.div`
@media (min-width: 990px) {
    .container{
        max-width: 870px;
    }
}

`;

// className="justify-content-end"

function NavBar() {
    return (
        <Styles>
            <Navbar  collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand   href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                </Nav.Item>
                <Button>Sign Up</Button>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Styles>

    )
}

export default NavBar
