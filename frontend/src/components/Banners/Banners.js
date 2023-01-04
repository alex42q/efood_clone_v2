import React, { useState } from 'react'
import "./Banners.css"

function Banners() {

    const [banners, getBanners] = useState([
        "https://brookscdn.e-food.gr/cdn-cgi/image/f=auto,w=130,h=165,fit=cover,dpr=2/7e28c49f2506a848f2352ce1d1026e62/1666886604/red_selection_qf.png",
        "https://static.e-food.gr/cdn-cgi/image/w=130,h=165,fit=cover,f=auto,dpr=2/quick_filters/one-plus-one-square-v2-el.png",
        "https://static.e-food.gr/cdn-cgi/image/w=130,h=165,fit=cover,f=auto,dpr=2/quick_filters/five-euro-deals-square-el.png",
        "https://brookscdn.e-food.gr/cdn-cgi/image/f=auto,w=130,h=165,fit=cover,dpr=2/52bc2c8ecd4fb8aeae4562b7e0ac6722/1671203433/qf-coca-cola-xmas-square.png",
        "https://brookscdn.e-food.gr/cdn-cgi/image/f=auto,w=130,h=165,fit=cover,dpr=2/63369255f033572ee4ed532d2092ae62/1643719488/quick_filter-live_tracking-banner_1.png",
        "https://static.e-food.gr/cdn-cgi/image/w=130,h=165,fit=cover,f=auto,dpr=2/quick_filters/rubies-square-v2-en.png",
        "https://static.e-food.gr/cdn-cgi/image/w=130,h=165,fit=cover,f=auto,dpr=2/quick_filters/offers-square-v2-el.png",
        "https://static.e-food.gr/cdn-cgi/image/w=130,h=165,fit=cover,f=auto,dpr=2/quick_filters/happy-hour-square-el.png",
        "https://static.e-food.gr/cdn-cgi/image/w=130,h=165,fit=cover,f=auto,dpr=2/quick_filters/deal-clock-square-el.png",
    ])

  return (
    <div>
        <div className='flex scroll-smooth md:scroll-auto pb-2 px-3 sm:px-0 whitespace-wrap space-x-3 sm:space-x-10 overflow-x-scroll'>
            {banners.map((items) =>{
                return(<>
                    <img className='banner__img' src={items} />
                </>)
            })}
        </div>
    </div>
  )
}

export default Banners