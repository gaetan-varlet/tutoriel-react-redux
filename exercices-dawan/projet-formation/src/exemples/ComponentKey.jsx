import React, {Component} from 'react';

// L'usage des key sont utiles pour travailler avec des composants
class ComponentKey extends Component{

  constructor(props){
    super(props)

    this.state = {
      data:[
        {composant:'Premier composant', id:1},
        {composant:'Deuxième composant', id:2},
        {composant:'Troisième composant', id:3}
      ]
    }

    this.changeState=this.changeState.bind(this);
  }

  changeState(event){
    this.setState({
      data:[
        {composant:'Premier composant modifié', id:4},
        {composant:'Deuxième composant modifié', id:5},
        {composant:'Troisième composant modifié', id:6}
      ]
    } )
  }


  render(){
    return (
      <div>
        <button onClick={this.changeState}>Cliquer</button>
        <div>
          {this.state.data.map( (composantDyn,i) => <Article key={i} composantD={composantDyn} />
          )}
        </div>
      </div>
    )
  }
}

export default ComponentKey;

class Article extends Component {
  render(){
    return(
    <div>
      <div>{this.props.composantD.composant}</div>
      <div>{this.props.composantD.id}</div>
    </div>
  )
  }
}
