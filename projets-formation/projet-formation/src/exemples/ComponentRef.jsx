import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Les réfs sont utilisés pour renvoyer une référence à un élément. Elles sont utiles lorsque nous avons besoin de manipuler les DOM
class ComponentRef extends Component{

  constructor(props){
    super(props);

    this.state = {
      data:""
    }

    this.changeState = this.changeState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  changeState(e){
    this.setState({data:e.target.value});
  }

  clearInput(){
    this.setState({data:""})
    ReactDOM.findDOMNode(this.refs.myInput).focus(); // rend le focus sur l'élément réf myInput
  }

  render(){
    return (
      <div>
        <input value={this.state.data} onChange={this.changeState} ref="myInput"/>
        <button onClick={this.clearInput}>Effacer</button>
        <span>{this.state.data}</span>
      </div>
    )
  }
}

export default ComponentRef;
