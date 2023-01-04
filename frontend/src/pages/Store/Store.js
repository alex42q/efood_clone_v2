import React, {useEffect, useState} from 'react'
import "./Store.css"
import SearchNav from '../../components/SearchNav/SearchNav'
import StoreHeaderComponent from '../../components/StoreHeaderComponent/StoreHeaderComponent'
import { GetOneStore } from '../../services/Services'
import { useParams } from 'react-router-dom'

function Store() {
    const [store, getStore] = useState({});
    const [storeCategories, getStoreCategories] = useState([])
    const [storeCategory, getStoreCategory] = useState({})
    const [storeActive, setStoreActive] = useState(0)
    const [storeFoods, getStoreFoods] = useState([])
    const [productsPerCat, getProductsPerCat] = useState([])
    const { slug} = useParams();

    useEffect(() =>{
        GetOneStore(slug)
        .then(res=>{
            getStore(res.data.data || {})
            getStoreCategories(res.data.menuCategories || [])
            getStoreFoods(res.data.foods|| [])
            console.log(res.data.data)
            getStoreCategory(res.data.data.Category || [])
            let customProducts = [];
            res.data.menuCategories.map((items) =>{
               const foodsOfCategory = res.data.foods.filter((items2) =>{
                    return items2.menuCategoryId.toString() === items.id.toString()
                })
                customProducts = [...customProducts, {
                        category: items,
                        products: foodsOfCategory
                    
                }]
            })
            console.log(customProducts)
            getProductsPerCat(customProducts)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    useEffect(() =>{
    
    }, [])

  return (
    <div className='mainStorCon'>
        <nav>
            <SearchNav />
        </nav>

        <div className='store__main__con'>
            <div>
                <StoreHeaderComponent 
                    image={store.image}
                    name={store.companyName}
                    rank={store.rank}
                    category={storeCategory.name}
                    elaxisti={store.elaxisti}
                    mo={store.mo}
                    logo={store.logo}
                />
            </div>
            <div className='results__section__conStore'>
                <div className='results__section__allCats'>
                    <h5 className='store__h5_cat'>Κατηγορίες</h5>
                    {storeCategories?.map((items, index) =>{
                        return(<>
                            <a href={`#${items.name}`}><h5 onClick={(e) =>{
                                setStoreActive(index)
                            }} className={index === storeActive ? 'store__category' : 'store__category_no_active'}>{items.name}</h5></a>
                        </>)
                    })}
                </div>
                <div className='store__con_down'>
                    {productsPerCat.map((items, index) =>{
                        return(<>
                            <h5 id={`${items.category.name}`} className='store__category__food'>{items.category.name}</h5>
                                {items.products.map((items2) =>{
                                    return(<>
                                    <div className='flex justify-between items-center mb-3 mt-3'>
                                        <div>
                                        <h3 className='store_category_food'>{items2.name}</h3>
                                        {items2.description !== "" ? <p className='store__category__p'>{items2.description}</p> : <></>}
                                        <div className='flex items-center'>
                                        <p className='mr-3'>{items2.price} {"\u20ac"}</p>
                                        {items.category.name === "Προσφορές" ? <h5 className='store__deals'>efood Deals</h5> : <></>}
                                        </div>
                                        </div>
                                        <div>
                                            {items2.image !== "" ? <img className='store__food__image' src={items2.image}></img> : <></>}
                                        </div>
                                    </div>
                                </>)
                            }).reverse()}
                        </>)
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Store