import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ComponentDomNode extends Component{

  constructor(){
    super();

    this.findDOMNode = this.findDOMNode.bind(this);
  }

  findDOMNode(){
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color="red";
  }

  render(){
    return (
      <div>
        <button onClick={this.findDOMNode}>SET STATE</button>
        <div id="myDiv">Toto</div>
      </div>
    )
  }
}

export default ComponentDomNode;
