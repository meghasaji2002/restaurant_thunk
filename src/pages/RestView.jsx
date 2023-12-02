import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantDetails } from '../redux/restaurantSlice';



function RestView() {
const dispatch = useDispatch();
  const {id} = useParams()

  useEffect(() => {
dispatch(fetchRestaurantDetails(id))
  }, [id, dispatch]);

  const selectedRestaurant = useSelector((state)=>state.restaurantSlice.restaurantDetails);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
     <Row className=''>

        <Col md={1}></Col>

        <Col md={3} className='mt-5'>
            <img width={'100%'} height={'75%'} src={selectedRestaurant?.photograph} />
        </Col>

        <Col md={7} className='px-5'>
            <hr />
            <h4 className='text-center'> <span className='text-warning'></span> Details</h4>
            <hr />
             
            <ListGroup>
            <ListGroup.Item className='text-center p-4'><h4>{selectedRestaurant?.name}</h4></ListGroup.Item>
      <ListGroup.Item>Neighborhood:{selectedRestaurant?.neighborhood} </ListGroup.Item>
      <ListGroup.Item>Cuisine_type :{selectedRestaurant?.cuisine_type} </ListGroup.Item>
      <ListGroup.Item>Address :{selectedRestaurant?.address} </ListGroup.Item>
      
      <ListGroup.Item className='p-4 text-center'>
        <button onClick={handleShow} className='btn btn-warning me-4'> Operating Hours</button>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Operating Hours</Modal.Title>
        </Modal.Header>
        <hr />
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday :{selectedRestaurant?.operating_hours?.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {selectedRestaurant?.operating_hours?.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {selectedRestaurant?.operating_hours?.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday : {selectedRestaurant?.operating_hours?.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {selectedRestaurant?.operating_hours?.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {selectedRestaurant?.operating_hours?.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {selectedRestaurant?.operating_hours?.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        
      </Modal>

      <RestReview reviews ={selectedRestaurant?.reviews} />
      </ListGroup.Item>
    </ListGroup>

        </Col>

        <Col md={1}></Col>
        
        
        
        
     </Row>

    </>
  )
}

export default RestView