import React from 'react'
import { Container } from 'react-bootstrap'
import styled  from 'styled-components'

const Styles = styled.div`

`;

function Layout(props) {
    return (
        <Styles>
            <Container className="mw-80">
                {props.children}
            </Container>
        </Styles>

    )
}

export default Layout
