import React, {useState} from 'react'
import './Navigation.css'
import movieLogo from '../../assets/images/movieLogo.png'
import {FaSearch} from 'react-icons/fa'
import HambModal from './HambModal'


const Navigation=props=>{
    const [hambModal, setHambModal]=useState(false)
  
  const openHambModalHandler=()=>{
    setHambModal(true)
  }
  const closeHambModalHandler=()=>{
    setHambModal(false)
  }
  
  return (
      
       <React.Fragment>
       <HambModal hambModal={hambModal}  onCloseHambModal={closeHambModalHandler}/>
        <div className='navigation'>
          <h1 className='navigation__logo'>M<img style={{width:'60px', margin:'-10px -10px'}} src={movieLogo} alt=''/>VIE <span>DATABASE</span></h1>
          <div className='navigation__searchBar'>
            <FaSearch style={{fontSize:'20px'}}/>
            <input type='text' placeholder='Search by Title'/>
          </div>
          
          <div className='navigation__hamburger' onClick={openHambModalHandler}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
         
        </div>
        </React.Fragment>
       
    )
}


export default Navigation