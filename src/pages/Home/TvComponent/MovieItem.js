import React, {useState} from 'react'
import './MovieItem.css'
import {imageURL} from '../../../requests'
import {MdStars} from 'react-icons/md'
import {GoBookmark} from 'react-icons/go'
import { useGlobalContext } from '../../../context'


const MovieItem=({backdrop, genreIDs,overview,title,rating,poster,id,release,onOpenMovieModal})=>{
      
  const [favColor, setFavColor]=useState(true)
  const {favMovieAdd, favMovieRemove}=useGlobalContext()

      const onAddOrRemoveFav=()=>{
        setFavColor(prevState=>!prevState)

        if(favColor){
          favMovieAdd({id, title, rating, release, poster})
        } else if (!favColor){
          favMovieRemove(id)
        }
      }
  
    return (
        <div className='movieItem' >
             <div className={`movieItem__fav ${favColor && 'color'}`} onClick={onAddOrRemoveFav}>
             <GoBookmark/>
            </div>
           <div className='movieItem__imgContainer'onClick={()=>onOpenMovieModal(id)} >
           
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