import React, {useState, useEffect} from 'react' 
import './TvComponent.css'
import {FiPower} from 'react-icons/fi'
import { animateScroll as scroll } from 'react-scroll'
import ModalFilter from './ModalFilter'
import requests from '../../../requests'
import axios from '../../../axios'
import MovieItem from './MovieItem'
import MovieModal from './MovieModal'
import GenreModal from './GenreModal'


const TvComponent=(props)=>{
  const [movieData, setMovieData]=useState([])
  const [modalFilter,setModalFilter]=useState(false)
  const [movieModal, setMovieModal]=useState(false)
  const [modalMovieInfo, setModalMovieInfo]=useState({})
  const [genreModal, setGenreModal]=useState(false)
  const [allMovies, setAllMovies]=useState([])
  
  
  
   // fetching movies data 

    useEffect(()=>{
        const fetchData= async ()=>{
            const response= await axios.get(requests.fetchTopRated)
            setMovieData(response.data.results)
            setAllMovies(response.data.results)
        }

        fetchData()
    },[])
    
    
    // filter-modal and movie-modal functionality (retrieving id movie info on open movie modal) //
    
    const openModalFilterHandler=()=>{
        setModalFilter(prevState=>!prevState)
    }
    const closeModalHandler=()=>{
      setModalFilter(false)
    }

    const openMovieModalHandler=(id)=>{
      const copyData=[...movieData]
      const movieInfo= copyData.find(movie=>{
        return movie.id === id
      })
      
      setModalMovieInfo(movieInfo)
      setMovieModal(true)
    }
    const closeMovieModalHandler=()=>{
      setMovieModal(false)
    }
    
    const genreModalHandler=()=>{
      setGenreModal(true)
    }
    const closeGenreModalHandler=()=>{
      setGenreModal(false)
    }

    //sorting by title and date functions 
    
    const sortByTitleHandler=()=>{
      const copyMovieData=[...movieData]
      
      copyMovieData.sort((movie1,movie2)=> movie1.title.split(' ')[0].localeCompare(movie2.title.split(' ')[0]))
      
      setMovieData(copyMovieData)
      setModalFilter(false)
      
    }

    const sortByDateHandler=(direction)=>{
      const copyMovieData=[...movieData]

      const copyData=copyMovieData.sort((movie1,movie2)=>movie1.release_date.localeCompare(movie2.release_date))
     
      
      const copyDataReverse=[...copyData].reverse()

      if (direction==='asc'){
         setMovieData(copyData)
      } else if (direction==='desc') {
        setMovieData(copyDataReverse)
      }
    }


    // filtering function and returning to initial array
     
    const changeGenreHandler=(genreId)=>{
       const filteredMovies=allMovies.filter(movie=>{
        return movie.genre_ids.includes(genreId)
     })
     if(genreId==='all'){
       setMovieData(allMovies)
     } else {
        setMovieData(filteredMovies)
     }
     
    }

    
    
    
    const moviesList=movieData.map(movie=>{
      return <MovieItem
        backdrop={movie.backdrop_path}
        genreIDs={movie.genre_ids}
        overview={movie.overview}
        title={movie.title}
        rating={movie.vote_average}
        poster={movie.poster_path}
        id={movie.id}
        key={movie.id}
        release={movie.release_date}
        onOpenMovieModal={openMovieModalHandler}
      />
    })

    
     

    


  return (
    <div className='tv' id='tv'>
       <MovieModal 
       showMovieModal={movieModal} 
       onCloseMovieModal={closeMovieModalHandler}
       movie={modalMovieInfo}
       />
       <GenreModal genreModal={genreModal} onCloseGenreModal={closeGenreModalHandler} onChangeGenre={changeGenreHandler} />
     
      <div className='tv__inner'>
        <div className='tv__movieList'>
         {moviesList}
        </div>
        <ModalFilter modalFilter={modalFilter} sortByTitle={sortByTitleHandler} sortByDate={sortByDateHandler} onCloseModal={closeModalHandler} onGenreModalOpen={genreModalHandler}/>
      </div>
      
      
      <div className='tv__control'>
          <button className='tv__sortButton' onClick={openModalFilterHandler}> 
          <p>SORT<span style={{color:'black'}}>/</span>FILTER</p>
           </button>
          <h1>MD</h1>
          <div className='tv__buttons'>
              <span></span>
              <span></span>
              <button onClick={()=>scroll.scrollToTop()}><FiPower/></button>
          </div>
      </div>
   
    </div>
    )
}


export default TvComponent