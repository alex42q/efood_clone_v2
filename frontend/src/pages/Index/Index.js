import React, {useEffect, useState} from 'react'
import Nav from '../../components/Nav/Nav'
import Header from '../../components/Header/Header'
import Offers from '../../components/Offers/Offers'
import DownLoadTheApp from '../../components/DownLoadTheApp/DownLoadTheApp'
import "../../App.css"

import { GetFourOffersIndex } from '../../services/Services'

function Index() {
    const [offers, getOffers] = useState([])

    useEffect(() =>{
        GetFourOffersIndex()
        .then(res=>{
            console.log(res.data.data)
            getOffers(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

  return (
    <div>
        <nav>
            <Nav />
        </nav>
        <div>
            <Header />
        </div>
        <div className='relative'>
        <div className='grid justify-center mt-10 offers__section'>
            <div className='mb-5'>
            <h5 className='offers__h5'><span className='offers__span'>41.794</span> προσφορές μόνο για εσένα</h5>
            </div>
           
            <div className='flex items-center justify-center offers__con'>
                {offers.map((items) =>{
                    return(<React.Fragment>
                        <div className='offers__con'>
                        <Offers 
                        image={items.image}
                        companyName={items.companyName}
                        offer="Με 1 μερίδα της επιλογής σας, δώρο ακόμη 1."
                    />
                        </div>
       
                    </React.Fragment>)
                })}
            </div>
        </div>
        <div>
            <DownLoadTheApp />
        </div>
        </div>

    </div>
  )
}

export default Index