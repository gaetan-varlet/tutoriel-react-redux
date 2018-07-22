import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

const Video = (props) => {
    return(
        <div className="embed-responsive embed-responsive-16by9">
            <img className="embed-responsive-item" src={`${IMAGE_BASE_URL}${props.image}`}/>
        </div>
    )
}

export default Video