import React from 'react'
import "./SearchNav.css"

function SearchNav() {
  return (
    <div className='searchNav__con'>
        <div className='flex items-center'>
            <div>
                <img src='https://www.e-food.gr/site-assets/img/efood/logo.svg'></img>
            </div>
            <div className='flex items-center'>
                <div>
                <i className="far fa-map-marker"></i>
                </div>
                <div>
                    <p className='searchNav__p'>Διεύθυνση παράδοσης</p>
                    <h5 className='searchNav__h5'>Αλκιβιάδου42</h5>
                </div>
            </div>
        </div>
        <div className='relative w-full'>
        <i className="searchNav__icon fas fa-search"></i>
        <input className='searchNav__input' type="text" placeholder='Αναζήτησε καταστήματα ή προιόντα'></input>
        </div>
        <div>
            <button className='searchNav__btn'>Σύνδεση/Εγγραφή</button>
        </div>
    </div>
  )
}

export default SearchNav