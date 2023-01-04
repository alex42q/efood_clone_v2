import React, {useEffect, useState} from 'react'
import "./CouzineFilters.css"
import CheckBoxFilter from '../CheckBoxFilter/CheckBoxFilter'
import { GetAllCategories } from '../../services/Services'
import Taksinomisi from '../Taksinomisi/Taksinomisi'
import {useParams, useNavigate, useSearchParams, createSearchParams  } from "react-router-dom";
import { TaksinomisiArray, FiltraArray } from './CousineFiltersHelper'

function CouzineFilters() {
    const [categories, getAllCategories] = useState([])
    const [arrowFu, setArrowFun] = useState(false)
    const [filters, getFilters] = useState([])
    const navigate  = useNavigate ()
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() =>{
        GetAllCategories()
        .then(res=>{
            getAllCategories(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    useEffect(() =>{
        if(filters.length!==0) {
            searchParams.set("category", filters);
            navigate({
                pathname: window.location.pathname,
                search: searchParams.toString()
            })
        }

        if(filters.length === 0) {
            searchParams.delete("category")
            setSearchParams(searchParams)
        }
        console.log(filters.length)
    }, [filters])

    
    const addToFav = (e) => {
        const value = e.target.value;

        getFilters((prev) =>
          filters.includes(value)
            ? prev.filter((cur) => cur !== value)
            : [...prev, e.target.value]
        );
    }

  return (
    <div>
        <div>
            <h3 className='cousineH3'>Κουζίνες</h3>
            <div>
                {arrowFu === false ? categories.slice(0, 2).map((items) =>{
                    return(<React.Fragment>
                        <CheckBoxFilter 
                        name={items.name}
                        addToFav={addToFav}
                    />
                </React.Fragment>)
                }) :categories.map((items) =>{
                    return(<React.Fragment>
                            <CheckBoxFilter 
                            addToFav={addToFav}
                            name={items.name}
                        />
                    </React.Fragment>)
                })}
                {categories.length > 2 ? <>
                    {categories.length > 2 && arrowFu === false ? <div className='flex items-center'>
                    <p className='mr-2'>Δες {categories.length} Κουζίνες</p>
                    <button><i onClick={(e) =>{
                        setArrowFun(true)
                    }} className="fas fa-arrow-down"></i></button>
                </div> : <><div className='flex items-center'>
                    <p className='mr-2'>Δες {categories.length} Κουζίνες</p>
                    <button><i onClick={(e) =>{
                        setArrowFun(false)
                    }} className="fas fa-arrow-up"></i></button>
                </div></>}
                </> : <></>}

            </div>
        </div>
        <div>
            <h3 className='cousineH3'>Ταξινόμηση</h3>
            {TaksinomisiArray.map((items) =>{
                return(<Taksinomisi key={items} name={items} id="1" />)
            })}
        </div>
        <div>
            <h3 className='cousineH3'>Φίλτρα</h3>
            {FiltraArray.map((items) =>{
                return(<CheckBoxFilter key={items} name={items} />)
            })}
        </div>
    </div>
  )
}

export default CouzineFilters