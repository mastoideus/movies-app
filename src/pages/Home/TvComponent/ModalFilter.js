import React from 'react'
import './ModalFilter.css'


const ModalFilter=({modalFilter, sortByTitle, sortByDate, onCloseModal, onGenreModalOpen})=>{
    return (
        <div className={`modalFilter ${modalFilter && 'modalFilter__open'}` } onClick={onCloseModal}>
            <div className='modalFilter__sortdiv'>
               <h1>SORT BY</h1>
               <ul>
               <li><button onClick={sortByTitle}>TITLE</button></li>
               <li className='modalFilter__ascDesc'>
               <button>RELEASE DATE</button>
               <button onClick={()=>sortByDate('asc')}>ASC</button>
               <button onClick={()=>sortByDate('desc')}>DESC</button>
               </li>
               </ul>
            </div>

            <div className='modalFilter__filterdiv'>
               <h1>FILTER BY</h1>
               <ul>
               <li><button onClick={onGenreModalOpen}>GENRE</button></li>
               <li><button>RELEASE DATE</button></li>
               </ul>
            </div>
            
        </div>
    )
}


export default ModalFilter