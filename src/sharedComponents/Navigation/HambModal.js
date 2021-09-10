import React from 'react'
import './HambModal.css'
import {Link} from 'react-router-dom'

const HambModal=({hambModal, onCloseHambModal})=>{
   return (
       <div className={`hambModal ${hambModal && 'hambModalOpen'}`} onClick={onCloseHambModal}>
          <h2><Link to='/home'>HOME</Link></h2>
          <Link to='/favorite'><h2>FAVORITES</h2></Link>
       </div>
   )
}


export default HambModal