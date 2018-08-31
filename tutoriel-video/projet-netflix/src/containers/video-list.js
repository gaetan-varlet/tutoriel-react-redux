import React, {Component} from 'react'
import VideoListItem from '../components/video-list-item'

class VideoList extends Component {
    render(){
        return(
            <ul>
                {
                    this.props.movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={this.receiveCallback.bind(this)}/>
                    })
                }
            </ul>
        )
    }

    receiveCallback(movie){
        this.props.callback(movie)
    }
}

export default VideoList