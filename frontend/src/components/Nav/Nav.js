import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div className='flex items-center justify-around px-12'>
        <div>
            <img src='https://www.e-food.gr/site-assets/img/efood/logo.svg'></img>
        </div>
        <div className='flex items-center'>
            <div className='mr-5'>
                <p>GR</p>
            </div>
            <div className='flex items-center'>
                <img className='nav__burgerImg mr-5' src='https://www.gravatar.com/avatar/aa270d52d704b70a2520c0e599b620e6?d=https://assets.e-food.gr/gravatar/no-avatar2.png'></img>
                <h5>Login</h5>
            </div>
        </div>
    </div>
  )
}

export default Nav