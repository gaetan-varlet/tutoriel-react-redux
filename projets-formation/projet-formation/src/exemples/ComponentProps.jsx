import React, {Component} from 'react';

class ComponentProps extends Component{

  render(){
    return (
      <div>
        <p>valeur du props.titre : {this.props.titre1}</p>
        <p>valeur du props.titre2 : {this.props.titre2}</p>
      </div>
    )
  }
}


// On peut définir des propos par défaut
ComponentProps.defaultProps = {
  titre1:"titre 1", titre2:"titre 2"
}


export default ComponentProps;
