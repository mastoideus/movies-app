import React from 'react'
import './Navigation.css'
import movieLogo from '../../assets/images/movieLogo.png'
import {FaSearch} from 'react-icons/fa'


const Navigation=props=>{
    return (
        <div className='navigation'>
          <h1 className='navigation__logo'>M<img style={{width:'60px', margin:'-10px -10px'}} src={movieLogo} alt=''/>VIE <span>DATABASE</span></h1>
          <div className='navigation__searchBar'>
            <FaSearch style={{fontSize:'20px'}}/>
            <input type='text' placeholder='Search by Title'/>
          </div>
          <div className='navigation__hamburger'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
    )
}


export default Navigation