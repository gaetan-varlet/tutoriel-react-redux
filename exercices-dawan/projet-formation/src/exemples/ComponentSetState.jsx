import React, {Component} from 'react';

class ComponentSetState extends Component{

  constructor(){
    super();
    this.state = {
      data:[]
    }
    this.change=this.change.bind(this);
    this.forceChange=this.forceChange.bind(this);
  }

  change(){
    var elt = "toto ";
    var tab = this.state.data.slice();
    tab.push(elt);
    this.setState({data:tab})
  }

  forceChange(){ // réexécute render()
    this.forceUpdate();
  }

  render(){
    return (
      <div>
        <button onClick={this.change}>SET STATE</button>
        <span>Tableau de State : {this.state.data}</span>
        <br/>
        <button onClick={this.forceChange}>Forcer</button>
        <span>{Math.random()}</span>
      </div>
    )
  }
}

export default ComponentSetState;
