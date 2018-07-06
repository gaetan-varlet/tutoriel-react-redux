import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ComponentPropTypes extends Component{

  render(){
    return (
      <div>
        <p>{this.props.nom}</p>
        <p>{this.props.tabArray.join(" - ")}</p>
        <p>{this.props.boolP ? "Vrai" : "Faux"}</p>
      </div>
    )
  }
}

ComponentPropTypes.propTypes={
    nom: PropTypes.string.isRequired,
    tabArray: PropTypes.array.isRequired,
    boolP: PropTypes.bool.isRequired,
    functionP: PropTypes.func,
    numberP: PropTypes.number,
    stringP: PropTypes.string
  }


// On peut définir des propos par défaut
ComponentPropTypes.defaultProps = {
  nom: 'Formation Insee',
  tabArray: [1,9,7,8],
  boolP: true,
  functionP: function(event){
    return event;
  },
  nomberP: 2,
  stringP: " valeur string "
}


export default ComponentPropTypes;
