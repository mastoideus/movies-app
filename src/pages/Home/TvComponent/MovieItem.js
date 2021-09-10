import React from 'react'
import './MovieItem.css'
import {imageURL} from '../../../requests'
import {MdStars} from 'react-icons/md'


const MovieItem=({backdrop, genreIDs,overview,title,rating,poster,id,release,onOpenMovieModal})=>{
    return (
        <div className='movieItem' onClick={()=>onOpenMovieModal(id)}>
           <div className='movieItem__imgContainer'>
           <img src={`${imageURL}${'/w200'}${poster}`} alt='' />
           </div>
           <div className='movieItem__movieInfo'>
           <h5>{title}</h5>
           <small>{release}</small>
           </div>
           <div className='movieItem__rating'>
             <MdStars style={{fontSize:'30px'}}/>
             <p style={{color:'grey'}}>{rating}</p>
           </div>
           
        </div>
    )
}


export default MovieItem