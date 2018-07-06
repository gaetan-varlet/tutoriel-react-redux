import React, { Component } from "react";
import { connect } from "react-redux";
import { ajouterProduit, supprimerProduit } from "./actions/actions.js";
import ListeProduits from "./components/ListeProduits.js";
import AjouterProduit from "./components/AjouterProduit.js";

// notre composant App est la racine de notre application. Il est le seul à pouvoir communiquer avec redux. La fonction connect() est utilisée pour connecter notre composant App à store
class App extends Component {
  render() {
    const { dispatch, produitVisible } = this.props;
    return (
      <div>
        <AjouterProduit
          onAddClick={(refProduit, nomProduit, prixProduit) =>
            dispatch(ajouterProduit(refProduit, nomProduit, prixProduit))
          }
        />

        <ListeProduits
          listeProduits={this.props.produitVisible}
          deleteClick={event => dispatch(supprimerProduit(event.target.id))}
        />
      </div>
    );
  }
}

// fonction qui prend l'état du store et renvoie les props qu'on va utiliser
function select(state) {
  return {
    produitVisible: state.listeProduitss
  };
}

export default connect(select)(App);
