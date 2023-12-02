import React from 'react'
import { useState } from 'react';

import Collapse from 'react-bootstrap/Collapse';

function RestReview({reviews}) {
    const [open, setOpen] = useState(false);
  //  const reviews = props.reviews
  //   console.log(reviews);
  return (
    <div className='my-4'>
        <button   onClick={() => setOpen(!open)}
       className='btn btn-warning' aria-controls="example-collapse-text"
       aria-expanded={open}>Click here to view the Reviews</button>
        <Collapse in={open}>
        <div id="example-collapse-text">
        { reviews?.length>0?
         reviews?.map((item)=>(
          <div className='mt-5'>
          <hr />
            <h6> name:{item.name} - date:{item.date}</h6>
            <p>Rating:{item.rating}</p>
            <p>{item.comments}</p>
       
        </div>
         )) : <p>Nothing to display</p>
     }
     </div>
</Collapse>
    </div>
  )
    }

export default RestReview