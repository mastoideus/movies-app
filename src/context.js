import {createContext, useContext, useState} from 'react'


const FavContext= createContext()


export const FavProvider=(props)=>{
   
    const [favItems, setFavItems]=useState([])

    const favMovieAdd=(item)=>{
       
            const copyFavItems=[...favItems, item]

          
           setFavItems(copyFavItems)
     
    }
    const favMovieRemove=(id)=>{
        const copyFavItems2=[...favItems]
        
        const removedList= copyFavItems2.filter(movie=>{
            return movie.id !== id
        })
       
        setFavItems(removedList)
    }
    
    return <FavContext.Provider value={{favMovieAdd, favMovieRemove, favItems}}>
         {props.children}
    </FavContext.Provider>
}


export const useGlobalContext= ()=>{
    return useContext(FavContext)
}