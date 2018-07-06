import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentForm2 extends Component{

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
        <Form dataProps={this.state.data} changeStateProps={this.changeState}/>
        <span>{this.state.data}</span>
      </div>
    )
  }
}

export default ComponentForm2;


class Form extends Component{

  render(){
    return(
        <input type="text" value={this.props.dataProps} onChange={this.props.changeStateProps}/>
    )
  }

}
