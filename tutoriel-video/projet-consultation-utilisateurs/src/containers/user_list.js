import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectUser} from '../actions/index'
import {bindActionCreators} from 'redux'


class UserList extends Component{
    render(){
        return(
            <div>
                <ul className="col-md-4">
                    {
                        this.props.myUsers.map((user) => {
                            return(
                                <li className="list-group-item" key={user.id}
                                 onClick={() => this.props.selectUser(user)}>
                                    {user.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

// elle va être appelée à chaque fois que le state change
// fonction qui prend le state et le met dans les props
function mapStateToProps(state){
    return {
        myUsers: state.users
    }
}

// la fonction selectUser est mise dans les props
// et lorsque qu'elle est appellée, on ne veut pas que ça retourne son action,
// mais que sa dispatche son action à tous les reducers. le reducer concerné va mettre à jour le state
function mapDispatchToProps(dispatch){
    return bindActionCreators({selectUser:selectUser},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList)