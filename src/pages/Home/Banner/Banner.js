import React from 'react' 
import './Banner.css'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'
import {CgMouse} from 'react-icons/cg'
import {Link} from 'react-scroll'


const Banner =props=>{
    return (
        <div className='banner'>
            <BannerLeft/>
            <BannerRight/>
            <Link className='banner__mouseIcon' to='tv' duration={250} smooth={true}>
            <CgMouse/>
            </Link>
        </div>
    )
}


export default Banner