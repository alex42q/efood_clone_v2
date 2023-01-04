import React from 'react'
import "./Magazi.css"

function Magazi({image, companyName, category, rank, cssRule, slug}) {
  return (
    <div className='magaziCon'>
        <a href={`/store/${slug}`}>
        <div className='mb-3'>
            <img className={cssRule === true ? "offers__image_magazi" : "offers__image__magazi_close"} src={image}></img>
        </div>
        <div className='flex items-center justify-between'>
            <h5 className='mb-1 offers__h5Text'>{companyName}</h5>
            <h5>{rank}</h5>
        </div>
        <div>
            <p>{category}</p>
        </div>
        </a>
    </div>
  )
}

export default Magazi