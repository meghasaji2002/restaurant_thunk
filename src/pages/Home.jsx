import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { fetchrestaurant } from '../redux/restaurantSlice'
import { useDispatch, useSelector } from 'react-redux'

function Home() {

    //accessing the state
    const allrestaurant = useSelector((state)=>state.restaurantSlice.allrestaurant)
    console.log(allrestaurant);

    const dispatch = useDispatch()

useEffect(()=>{
    //to update the value in state by using thunk api call 
   dispatch(fetchrestaurant()) 
},[])

  return (
    <div>
        <Row>
           { allrestaurant?.length>0?
              allrestaurant.map((restaurant)=>(<Col  className='px-5 py-3' sm={6} md={4}>
              <RestCard  restaurant={restaurant}/>
          </Col>))
           :
            <p className='fs-4 text-danger'>Nothing to display</p>
            }

           
        </Row>
    </div>
  )
}

export default Home