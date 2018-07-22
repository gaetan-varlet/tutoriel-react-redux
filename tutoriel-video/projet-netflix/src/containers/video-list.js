import React from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = (props) => {
    //console.log(props.movieList)
    return(
        <ul>
            {
                props.movieList.map(movie => {
                    return <VideoListItem key={movie.id} movie={movie} callback={receiveCallback}/>
                })
            }
        </ul>
    )

    function receiveCallback(movie){
        props.callback(movie)
    }
}

export default VideoList