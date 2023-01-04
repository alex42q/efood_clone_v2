import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import "./Header.css"

function Header() {
  const navigation = useNavigate()
  const [searchText, getSearchText] = useState("")
  

  return (
    <div className='header__con'>
        <div className='mr-12'>
            <h1 className='header__h1'>Παράγγειλε Delivery online σε 1'</h1>
            <p className='header__p'>20.000 καταστήματα, 100 πόλεις. Πλήρωσε με κάρτα, μετρητά ή PayPal</p>
            <form onSubmit={(e) =>{
              navigation(`/location/${searchText}`)
            }}>

           
            <div className='mt-10 input__con flex items-center'>
                <i className="header__icon fas fa-search"></i>

                <input onChange={((e) =>{
                  getSearchText(e.target.value)
                })} className='header__input' type="text" placeholder='Βάλε τη Διεύθυνση σου'></input>
                <button type='submit' className='header__button'>Παράγγειλε τώρα</button>
           

            </div>
            </form>
        </div>
        <div className=''>
            <img className='w-full' src='https://www.e-food.gr/cdn-cgi/image/w=936,h=768,f=auto,q=100/site-assets/img/bg/hero/home/Desktop/EF-afternoon-red.jpg'></img>
        </div>
    </div>
  )
}

export default Header