import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../food_circle-removebg-preview.png'
import { useDispatch } from 'react-redux';
import { Search } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';


function Header() {

  const dispatch = useDispatch()

  return (
    <>
   <Navbar variant='dark' >
        <Container>
          <Navbar.Brand href="#home" className='d-flex p-3'>
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
         <h5 className='mt-3 ms-4'> <span className='text-warning'>  Food </span>Circle</h5>
         
        
          </Navbar.Brand>

          <input onChange={(e)=>dispatch(search(e.target.value))} type="text" className='form-control w-25' placeholder='search by neighborhood'/>
         
        </Container>
      </Navbar>

    </>
  )
}

export default Header