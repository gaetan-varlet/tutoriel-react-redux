import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

const VideoListItem = (props) => {
    return(
        <li className="list-group-item" onClick={handleOnClick}>
            <div className="media">
               <div className="media-left">
                <img width="100px" src={`${IMAGE_BASE_URL}${props.movie.poster_path}`}/>
                </div>
                <div className="media-body">
                    <h5 className="title_list_item">Un film recommandé : {props.movie.title}</h5>
                </div>
            </div>
        </li>
    )

    function handleOnClick(){
        props.callback(props.movie)
    }
}

export default VideoListItem