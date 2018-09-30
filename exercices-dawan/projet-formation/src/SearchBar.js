import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props) // permet de recevoir des propriétés de composants parents
    // création du state en lui affectant une valeur
    this.state = {searchText:"",placeHolder:"Tapez votre film..."}
  }

  render(){
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
        <p>{this.state.searchText}</p>
      </div>
    )
  }
  // onChange est appelé à chaque modification de l'input
  // bind(this) permet de raccrocher le contexte de la classe dans la fonction handleChange : this de la classe est maintenant accessible dans la fonction handleChange
  // this.state.placeHolder permet de récupérer le placeHolder définit dans le state
  handleChange(event){
    // onChange envoie automatiquement en paramètre un événement de la fonction son événement
    this.setState({searchText:event.target.value})
    // this.state est immuable, ça écrase les objets, il faut donc utiliser setState
    // event.target.value permet d'accéder à la valeur de l'input
    // quand il y a une modification dans l'état, render() est automatiquement appelé, on peut donc afficher en live les modifications. React ne rafraîchit que ce qui change.
  }
}

export default SearchBar;
