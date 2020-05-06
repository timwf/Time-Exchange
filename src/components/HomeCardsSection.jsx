import React from 'react'
import HomeCard from './HomeCard'
import { Col, Row } from 'react-bootstrap'

function HomeCards() {
    return (
        <div>
            <h3 className="mb-4">Popular Categories</h3>
            <Row className="">
            <Col xs={4}>            
            <HomeCard img={'./assets/web-des-cat.png'} title="Web Developers"/>
            </Col>
            <Col xs={4}>            
            <HomeCard img={'./assets/carpenter-des-cat.png'} title="Carpenters"/>
            </Col>
            <Col xs={4}>            
            <HomeCard img={'./assets/gardener-des-cat.png'} title="Gardeners"/>
            </Col>
            </Row>



        </div>
    )
}

export default HomeCards
