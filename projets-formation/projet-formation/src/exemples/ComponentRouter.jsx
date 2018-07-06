import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



class ComponentRouter extends Component{

  render(){
    return (
      <Router>
        <div>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Login'}>Login</Link></li>
          </ul>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Login' component={Login}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default ComponentRouter;


class Home extends Component{
  render(){
    return(
      <div>
        <p>Page d'accueil</p>
      </div>
    )
  }
}

class Login extends Component{
  render(){
    return(
      <div>
        <p>Page de login</p>
      </div>
    )
  }
}
