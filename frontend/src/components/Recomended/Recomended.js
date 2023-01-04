import React, {useEffect, useState} from 'react'
import "./Recomended.css"
import { GetRecomendedCompanies } from '../../services/Services'
import Magazi from '../Magazi/Magazi'


function Recomended() {
    const [recomendedOffers, getRecomendedOffers] = useState([])

    useEffect(() =>{
        GetRecomendedCompanies()
        .then(res=>{
            getRecomendedOffers(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

  return (
    <div className='mt-5'>
        <h5 className='recomended_h5'>{recomendedOffers.length} προτεινόμενα</h5>
        <div className='grid grid-cols-2 gap-5'>
            {recomendedOffers.map((items) =>{
                return(<div>
                    <Magazi 
                        image={items.image}
                        companyName={items.companyName}
                        category={items.Category.name}
                        rank={items.mo}
                    />
                </div>)
            })}
        </div>
    </div>
  )
}

export default Recomended