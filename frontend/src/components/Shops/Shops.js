import React, {useEffect, useState, useMemo} from 'react'
import "./Shops.css"
import { GetAllCompanies } from '../../services/Services'
import Magazi from '../Magazi/Magazi'
import { FilterTheShops,GetDayByDb, GetTimeAndCompare } from './Shops.helper'
import { useSearchParams } from 'react-router-dom'

function Shops() {
    const [allShops, getAllShops] = useState([])
    const [openShops, getOpenShops] = useState([])
    const [closeShops, getCloseShops] = useState([])
    const [newArray, setNewArray] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const query1 = searchParams.get("category")
    const query2 = searchParams.get("taksinomisi")
    const [filterShops, getFilterShops] = useState([])




    useEffect(()=>{
        GetAllCompanies()
        .then(res=>{
            getAllShops(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    useEffect(() =>{
        const queryArray =[]
        const newShops = []
        if(query1 !== null) {
            queryArray.push(query1)
        }
        const res = allShops.filter(item => {
          
            if(item.day === GetDayByDb(item.day) && GetTimeAndCompare(item.start_at, item.end_at)){
                console.log(item)
                return queryArray.toString().split(",").includes(item.Company.Category.name)
            }
           
        })
        getFilterShops(res)
    
    }, [query1])


    const visibleTodos = useMemo(() => allShops.filter(x => {
        if(x.day === GetDayByDb(x.day) && GetTimeAndCompare(x.start_at, x.end_at)){
         return x
        }
     }), [allShops]);

    const notVisibleTodos = useMemo(() => allShops.filter(x => {
        if(x.day === GetDayByDb(x.day) && GetTimeAndCompare(x.start_at, x.end_at)) {
         return null
        }else{
            return x;
        }
     }), [allShops]);

     const recomededShows =useMemo(() => allShops.filter(x => {
        if(x.day === GetDayByDb(x.day) && GetTimeAndCompare(x.start_at, x.end_at) && x.Company.recomended === true){
         return x
        }
     }), [allShops]).slice(0, 4);

  return (
    <div>
    <h5 className='recomended_h5'>{recomededShows.length} προτεινόμενα</h5>
    <div className='mt-5'>
        <div className='grid grid-cols-2 gap-5'>
            {recomededShows.map((items) =>{
                return(<>
                        <Magazi 
                        companyName={items.Company.companyName}
                        image={items.Company.image}
                        cssRule={true}
                    />
                </>)
            })}
        </div>
    </div>
        {query1 !== null ? <><h5 className='recomended_h5'>{filterShops.length} Καταστήματα</h5></> : <><h5 className='recomended_h5'>{visibleTodos.length} Καταστήματα</h5></>}

        {query1 && filterShops.length === 0 ? <><h5 className='recomended_h5'>Δεν βρέθηκαν ανοιχτά καταστήματα στα φίλτρα</h5></> : <></>}
        <div className='grid grid-cols-2'>
        {query1 !== null ? <>
            {filterShops.map((items) =>{
            if(items.day === GetDayByDb(items.day) && GetTimeAndCompare(items.start_at, items.end_at)) {
                return(<>
                    <Magazi 
                        companyName={items.Company.companyName}
                        image={items.Company.image}
                        cssRule={true}
                        slug={items.Company.slug}
                    />
                </>)
            }
        })}</> : <>
        {allShops.map((items) =>{
            if(items.day === GetDayByDb(items.day) && GetTimeAndCompare(items.start_at, items.end_at)) {
                return(<>
                    <Magazi 
                        companyName={items.Company.companyName}
                        image={items.Company.image}
                        cssRule={true}
                        slug={items.Company.slug}
                    />
                </>)
            }
        })}
        </>}

        </div>
        <h5 className='recomended_h5'>Βρήκαμε {notVisibleTodos.length} κλειστά Καταστήματα</h5>
        <div className='grid grid-cols-2'>
        
            {allShops.map((items) =>{
            if(items.day === GetDayByDb(items.day) && GetTimeAndCompare(items.start_at, items.end_at)) {
                return null;
            }else{
               closeShops.push(items.day)
              
                return(<>
                    <Magazi 
                        companyName={items.Company.companyName}
                        image={items.Company.image}
                        cssRule={false}
                        slug={items.Company.slug}
                    />
                </>)
            }
        })}
        </div>
    </div>
  )
}

export default Shops