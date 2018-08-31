import React, {Component} from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

class VideoListItem extends Component {
    render(){
        return(
            <li className="list-group-item" onClick={this.handleOnClick.bind(this)}>
                <div className="media">
                   <div className="media-left">
                    <img width="100px" src={`${IMAGE_BASE_URL}${this.props.movie.poster_path}`}/>
                    </div>
                    <div className="media-body">
                        <h5 className="title_list_item">Un film recommandé : {this.props.movie.title}</h5>
                    </div>
                </div>
            </li>
        )
    }


    handleOnClick(){
        this.props.callback(this.props.movie)
    }
}

export default VideoListItem