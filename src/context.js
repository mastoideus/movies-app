import {createContext, useContext, useState,useEffect} from 'react'


const FavContext= createContext()


export const FavProvider=(props)=>{
   
    const [favItems, setFavItems]=useState(JSON.parse(localStorage.getItem('favorites')))
    const [term, setTerm]=useState('')
    
    const onTransportData=(data)=>{
        setTerm(data)
    }
   
    
    
    
    useEffect(()=>{
           localStorage.setItem('favorites', JSON.stringify(favItems))
    
   },[favItems])
    
    
    
    const favMovieAdd=(item)=>{
            let copyFavItems=[...favItems]
            const existingItem= copyFavItems.find(movie=>movie.id===item.id)
            if (existingItem){
                return
            } else {
               copyFavItems=[...favItems, item]
               setFavItems(copyFavItems)
            }
            
     
    }
    
    const favMovieRemove=(id)=>{
        const copyFavItems2=[...favItems]
        
        const removedList= copyFavItems2.filter(movie=>{
            return movie.id !== id
        })
       
        setFavItems(removedList)
    }
    
    return <FavContext.Provider value={{favMovieAdd, favMovieRemove, favItems, onTransportData, term}}>
         {props.children}
    </FavContext.Provider>
}


export const useGlobalContext= ()=>{
    return useContext(FavContext)
}