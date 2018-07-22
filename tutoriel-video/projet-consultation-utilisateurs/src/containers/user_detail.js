import React, {Component} from 'react'
import {connect} from 'react-redux'

class UserDetail extends Component {
    render(){
        if(!this.props.myActiveUser){
            return <div>Sélectionnez un utilisateur pour démarrer</div>
        }
        return(
            <div>
                <h3>Détail de {this.props.myActiveUser.name}</h3>
                <ul>
                    <li>Id : {this.props.myActiveUser.id}</li>
                    <li>Rôle : {this.props.myActiveUser.role}</li>
                    <li>Actif : {this.props.myActiveUser.active}</li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        myActiveUser : state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail)