import React, {useEffect, useState} from 'react'
import './GenreModal.css'
import {FiPower} from 'react-icons/fi'
import axios from '../../../axios'


const GenreModal=({genreModal, onCloseGenreModal, onChangeGenre})=>{
    const [genreList, setGenreList]=useState([])
    
    useEffect(()=>{
        const fetchData= async()=>{
           const response= await axios.get(`/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
           
           const genres=response.data.genres.slice(0,12)
           setGenreList(genres)
        }
        fetchData()
    },[])

   

    const buttonList= genreList.map(genre=>{
        return <button className='genreBtns' key={genre.id} onClick={()=>onChangeGenre(genre.id)}>{genre.name.toUpperCase()}</button>
    })
    
    
    
    
    return <div className={`genreModal ${genreModal && 'genreModalOpen'}`} onClick={onCloseGenreModal}>
         <div className='controller'>
             <div className='controller__top'>
                 <small>TV</small>
                 <FiPower/>
             </div>
             <div className='controller__volume'>
                <small>+ VOL -</small>
                <small>+ CH -</small>
             </div>
             <div className='controller__genresList'>
                <small>Channels</small>
                <div className='controller__btnlist'>
                    {buttonList}
                    <button className='genreBtns' onClick={()=>onChangeGenre('all')}>ALL MOVIES</button>
                </div>
                <span>OK</span>
             </div>
             


         </div>
    </div>
}

export default GenreModal