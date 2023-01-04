import React from 'react'
import "./DownLoadTheApp.css"

function DownLoadTheApp() {
  return (
    <div className='grid grid-cols-2 items-center justify-center download__container'>
        <div className='w-full px-6'>
            <h2 className='download__h2'>Κατέβασε το App</h2>
            <p className='download__p'>Παράγγειλε τώρα από το κινητό σου (iOS ή Android) με τρία απλά βήματα: προσθήκη, καλάθι, αποστολή.</p>
            <div className='flex items-center'>
                <img src='https://www.e-food.gr/cdn-cgi/image/w=130,fit=cover,q=100,f=auto/site-assets/img/howitworks/app-store-icon.png'></img>
                <img src='https://www.e-food.gr/cdn-cgi/image/w=130,fit=cover,q=100,f=auto/site-assets/img/howitworks/play-store-icon.png'></img>
                <img src='https://www.e-food.gr/cdn-cgi/image/w=130,fit=cover,q=100,f=auto/site-assets/img/howitworks/huawei-appGallery.png'></img>
            </div>
        </div>
        <div>
            <img src='https://brookscdn.e-food.gr/cdn-cgi/image/width=668,dpr=2,quality=100,format=auto/5711cf77f4f869ecff0e3891fb2b6349/1646086491/efood-footer-mobileapps-20220301.jpg'></img>
        </div>

    </div>
  )
}

export default DownLoadTheApp