import React from 'react'
import { Container } from 'react-bootstrap'


function Layout(props) {
    return (
        <Container className="mw-80">
                {props.children}
        </Container>
    )
}

export default Layout
