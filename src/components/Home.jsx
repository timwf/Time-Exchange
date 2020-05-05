import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import './Home.css'
import styled  from 'styled-components'

const Styles = styled.div`
    .hero-content h1, h3{
        background: -webkit-linear-gradient(left, #581E56 0%,  #BD4848 79%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
  
    }
    .image-hero {
        background-image: url('/assets/hero-img.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
`;


function Home() {
    return (
        <Styles>
            <React.Fragment>    
                <Row className = "flex-nowrap mt-5 pt-5">
                    <Col xs={6} className="hero-content pt-5 pb-5">
                       <h1 className="pb-3 pr-5">Exchange Your Time for Services.</h1>
                       <h3 className="pb-3">You can’t put a price on time.  </h3>
                       <InputGroup className="mb-3 mt-4 pr-5 mr-5 mw-50">
                            <FormControl
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary">Button</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Col xs={5} className="image-hero">                   
                    </Col>
                </Row>
            </React.Fragment>
        </Styles>
    )
}

export default Home
