import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'
import axios from 'axios'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIE_URL = "discover/movie?language=fr&sort_by=popylarity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=0c196fde3d808eb0eaf950a835e96443"
const SEARCH_URL = "search/movie?language=fr&include_adult=false"

class App extends Component{

    constructor(props){
        super(props)
        this.state = {movieList:{}, currentMovie:{}}

        this.onClickSearch = this.onClickSearch.bind(this)
        this.onClickListItem = this.onClickListItem.bind(this)
    }

    componentWillMount(){
        this.initMovies()
    }

    initMovies(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIE_URL}&${API_KEY}`).then(
            function(response){
                console.log(response)
                this.setState({movieList: response.data.results.slice(1,6), currentMovie: response.data.results[0]},
                function(){
                    //this.applyVideoToCurrentMovie() // callback, qui permet d'être sûr que le state a été mis à jour
                })
            }.bind(this)   
        )
    }

    applyVideoToCurrentMovie(){
        axios.get(
        `${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=video&include_adult=false`
        ).then(
            function(response){
                console.log("---")
                console.log(response)
                console.log("---")
                const youtubeKey = response.data.videos.results[0].key
                let newCurrentMovieState = this.state.currentMovie
                newCurrentMovieState.videoId = youtubeKey
                this.setState({currentMovie: newCurrentMovieState})
                console.log("newCurrentMovieState")
                console.log(newCurrentMovieState)
            }.bind(this)
        )
    }

    onClickListItem(movie){
        this.setState({currentMovie:movie}, function(){
            //this.applyVideoToCurrentMovie()
            this.setRecommandation()
        })
    }

    onClickSearch(searchText){
        if(searchText){
            axios.get(
                `${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`
            ).then(
                function(response){
                    if(response.data && response.data.results[0]){
                        if(response.data.results[0].id != this.state.currentMovie.id){
                            this.setState({currentMovie:response.data.results[0]}, ()=>{
                                //this.applyVideoToCurrentMovie()
                                this.setRecommandation()
                            })
                        }
                    }
                }.bind(this)
            )
        }
    }

    setRecommandation(){
        axios.get(
            `${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`
        ).then(function(response){
            console.log('recommendations')
            console.log(response)
            this.setState({movieList:response.data.results.slice(0,5)})
        }.bind(this)
        )
    }

    render(){
        const renderVideoList = () => {
            if(this.state.movieList.length>=5){
                return <VideoList movieList={this.state.movieList} callback={this.onClickListItem}/>
            }
        }
        return(
            <div>
                <div className="search_bar">
                    <SearchBar callback={this.onClickSearch}/>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Video image={this.state.currentMovie.poster_path}/>
                        <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
                    </div>
                    <div className="col-md-4">
                        {renderVideoList()}
                    </div>
                </div>
            </div>
          )
    }
}

export default App