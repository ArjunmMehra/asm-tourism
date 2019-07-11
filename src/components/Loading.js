import React from 'react'
import loadingGIF from '../images/gif/loading-arrow.gif' 

const Loading = () =>{
    return(
        <div className="loading">
            <h4>Rooms data loading...</h4>
            <img src= {loadingGIF} alt="Rooms data loading"/>
        </div>
    )
}

export default Loading