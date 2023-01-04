import React, { useMemo, useState, useEffect, Fragment } from 'react'
import "./CheckBoxFilter.css"
import { useNavigate, createSearchParams, useSearchParams  } from 'react-router-dom'


function CheckBoxFilter({name, addToFav}) {
    const navigate  = useNavigate ()
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, getFilters] = useState([])
    const [person, setPerson] = useState([]);
    const [newArr , setNewArr] = useState("")

    const query = searchParams.get('category');

    const search = new URLSearchParams();


  return (
    <div className='flex items-center mb-3'>

        <input id={name} name={name} value={name} onClick={addToFav} className='check__checkbox' type="checkbox"></input>
        <label htmlFor={name} className='check__label'>{name}</label>

    </div>
  )
}

export default CheckBoxFilter