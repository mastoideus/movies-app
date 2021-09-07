import React from 'react' 
import './Banner.css'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'


const Banner =props=>{
    return (
        <div className='banner'>
            <BannerLeft/>
            <BannerRight/>
        </div>
    )
}


export default Banner