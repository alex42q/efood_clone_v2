import React from 'react'
import "./Taksinomisi.css"
import {useParams, useNavigate, useSearchParams, createSearchParams  } from "react-router-dom";

function Taksinomisi({name, id}) {
    const navigate  = useNavigate ()
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('taksinomisi');

  return (
    <div  className='flex items-center mb-2'>
        <input onChange={(e) =>{
            searchParams.set("taksinomisi", e.target.value);
            navigate({
                pathname: window.location.pathname,
                search: searchParams.toString()
            })
        }} id={id} name={id} value={name} className='radio__radioButton' type="radio"></input>
        <label for={id} className='radio__label'>{name}</label>
    </div>
  )
}

export default Taksinomisi