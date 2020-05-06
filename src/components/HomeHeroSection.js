import React from 'react'
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function HomeHeroSection() {
    return (
        <div>
                            <Row className = "flex-nowrap">
                    <Col xs={6} className="hero-content pb-5">
                       <h1 className="pb-1 pr-5">Exchange Your Time for Services.</h1>
                       <h3 className="pb-1">You can’t put a price on time.  </h3>
                       <InputGroup className="mb-3 mt-3 pr-5 mr-5 mw-50">
                       <InputGroup.Prepend>
                                <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            icon=""
                            placeholder='Try  "web designer"'
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="primary">Button</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <div className = "suggestions-hero">
                            <p className="suggest-txt">Popular: </p>
                            <Button variant="outline-secondary">web designer</Button>{' '}
                            <Button variant="outline-secondary">electrician</Button>{' '}
                            <Button variant="outline-secondary">copy writer</Button>{' '}
                        </div>

                    </Col>
                    <Col xs={6} >   
                    <div className="image-hero"></div>                
                    </Col>
                </Row>
        </div>
    )
}

export default HomeHeroSection
