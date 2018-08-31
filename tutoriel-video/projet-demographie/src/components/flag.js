import React, {Component} from 'react'

const URL_BASE = "http://www.sciencekids.co.nz/images/pictures/flags680/"

class Flag extends Component {
    render(){
        return(
            <div>
                <img className={this.props.className} src={`${URL_BASE}${this.props.country}.jpg`}/>
            </div>
        )
    }
}

export default Flag