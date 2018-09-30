import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentForm extends Component{

  constructor(){
    super();
    this.state = {
      data:'initial'
    }
    this.changeState=this.changeState.bind(this);
  }

  changeState(event){
    this.setState({data:event.target.value})
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.data} onChange={this.changeState}/>
        <span>{this.state.data}</span>
      </div>
    )
  }
}

export default ComponentForm;
