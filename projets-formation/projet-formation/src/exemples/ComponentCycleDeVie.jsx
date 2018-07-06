import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class ComponentCycleDeVie extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:0
    }

    this.setCompteur = this.setCompteur.bind(this);
  }

  setCompteur(){
    this.setState({data:this.state.data+1})
  }

  render(){
    return (
      <div>
        <button onClick={this.setCompteur}>Incrémentation</button>
        <Article compteur={this.state.data} />
      </div>
    )
  }
}


export default ComponentCycleDeVie;

class Article extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[],
      test:"toto"
    }
  }

  componentWillMount(){
    console.log("componentWillMount")
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps")
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate")
    return true; // si false, on s'arrête là et on ne fait pas le render
  }

  affichageResultatRequete(){
   if(this.state.data.length>0){
      return(
        <ul>
          {this.state.data.map((item) => (
            <li key={item.id}>{item.userId} - {item.id} - {item.title}</li>
          ))}
        </ul>
      )
    }
    }


  render(){
    console.log("render")
    return(
      <div>
        <span>{this.props.compteur}</span>
        <p>{this.state.test}</p>
        {this.affichageResultatRequete()}
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount")
    this.requeteAjax()
  }

  requeteAjax(){
    var t = this
    axios.get("https://jsonplaceholder.typicode.com/albums").then(function(response){
      console.log(response)
      console.log(response.data[0].id)
      console.log(response.data[0].title)
      t.setState({data:response.data})
    })
  }
}
