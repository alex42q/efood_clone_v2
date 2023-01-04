import React from 'react'
import SearchNav from '../../components/SearchNav/SearchNav'
import Filters from '../../components/Filters/Filters'
import Banners from '../../components/Banners/Banners'
import Recomended from '../../components/Recomended/Recomended'
import Shops from '../../components/Shops/Shops'

import "./SearchPage.css"

function SearchPage() {


  return (
    <div>
        <nav>
            <SearchNav />
        </nav>
        <div className='baseSearchCon'>
            <div  className='searchPage__baseCon'>
            <div className='filters__section__con'>
                <Filters />
            </div>
            <div className='results__section__con'>
                <div>
                    <Banners />
                </div>
                <div>
                    <Shops />
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default SearchPage