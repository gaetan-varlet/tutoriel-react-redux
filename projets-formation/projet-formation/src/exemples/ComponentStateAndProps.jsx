import React, {Component} from 'react';

class ComponentStateAndProps extends Component{
  constructor(props){
    super(props)
    this.state = {
      etat1:"valeur de etat1",
      etat2:"valeur de etat2",
    }
  }

  render(){
    return (
      <div>
        <p>Header prop1={this.state.etat1}</p>
        <p>Footer prop2={this.state.etat2}</p>
      </div>
    )
  }

}
export default ComponentStateAndProps;

class Header extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.prop1}</h2>
      </div>
    )
  }
}

class Footer extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.prop2}</h2>
      </div>
    )
  }
}
