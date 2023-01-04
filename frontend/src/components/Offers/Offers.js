import React from 'react'
import "./Offers.css"

function Offers({image, companyName, offer}) {
  return (
    <div className='w-full'>
        <div className='mb-3'>
            <img className='offers__image' src={image}></img>
        </div>
        <div className=''>
            <h5 className='mb-1 offers__h5Text'>{companyName}</h5>
            <p className='offers__textsCon'>{offer}</p>
        </div>
    </div>
  )
}

export default Offers