import React from 'react'
import "./StoreHeaderComponent.css"

function StoreHeaderComponent({image, logo, name, rank, category, elaxisti, mo}) {
  return (
    <div className='storeHeaderMainCon'>
        <div>
            <img src={image} />
        </div>
        <div>
            <div className='mt-4 mb-4 flex items-center'>
                <div className='mr-5'>
                    <img className='store__img' src={logo}></img>
                </div>
                <div>
                <h2 className='store__header__h2'>{name}</h2>
                <div className='flex items-center'>
                    <i className="fas fa-star store__star"></i>
                    <h5 className='store__mo'>{mo}</h5>
                    <h5 className='store__rank'>({rank})</h5>
                    <h5 className='store__category__h5__header'>{category}</h5>
                    <h5 className='store__elaxisti'>Ελάχιστη {elaxisti}{"\u20ac"} </h5>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default StoreHeaderComponent