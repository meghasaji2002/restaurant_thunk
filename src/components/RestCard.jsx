import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
    <Link to={`/restaurant_view/${restaurant.id}`} style={{textDecoration:'none'}}>
         <Card style={{ width: '100%' }}>
        <Card.Img variant="top" height={'350px'} src={restaurant.photograph} />
        <Card.Body>
          <Card.Title className='text-center text-warning p-2'>{restaurant.name}</Card.Title>
          <hr />
        <Row>
            <Col className=' '>
                <Card.Text>
                    <p style={{fontSize:'15px'}}> {restaurant.neighborhood}</p>
                </Card.Text>
            </Col>
            <Col className=''>
                <Card.Text>
                    <p style={{fontSize:'15px'}}>cuisine : {restaurant.cuisine_type}</p>
                </Card.Text>
            </Col>
        </Row>
        </Card.Body>
        
        
      </Card>
    </Link>
  )
}

export default RestCard