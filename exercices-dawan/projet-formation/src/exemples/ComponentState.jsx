import React, {Component} from 'react';

class ComponentState extends Component{
  constructor(){
    super()
    this.state = {data:"toto", data2:"tata"}
  }

  render(){
    return (
      <div>
        <p>valeur du state.data : {this.state.data}</p>
        <p>valeur du state.data2 : {this.state.data2}</p>
      </div>
    )
  }

}

export default ComponentState;
