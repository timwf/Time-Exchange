import React from 'react'
import { Card, Button} from 'react-bootstrap'

function HomeCard(props) {
    return (
        <div>
            <Card style={{}}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Browse</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default HomeCard
