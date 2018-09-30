import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ajouterProduitListe,
  ajouterProduitPanier,
  supprimerProduit
} from "./actions/actions.js";
import ListeProduits from "./components/ListeProduits.js";
import PanierProduits from "./components/PanierProduits.js";
import AjouterProduit from "./components/AjouterProduit.js";
import AjouterAuPanier from "./components/AjouterAuPanier.js";

// notre composant App est la racine de notre application. Il est le seul à pouvoir communiquer avec redux. La fonction connect() est utilisée pour connecter notre composant App à store
class App extends Component {
  affichageConditionnelListe(maVariable, dispatcher) {
    if (maVariable.length > 0) {
      return (
        <ListeProduits
          listeProduits={maVariable}
          deleteClick={event => {
            dispatcher(supprimerProduit(event.target.id));
          }}
        />
      );
    } else {
      return <div>Votre liste est vide</div>;
    }
  }

  affichageConditionnelPanier(maVariable, dispatcher) {
    if (maVariable.length > 0) {
      return (
        <PanierProduits
          panierProduits={maVariable}
          deleteClick={event => dispatcher(supprimerProduit(event.target.id))}
        />
      );
    } else {
      return <div>Votre panier est vide</div>;
    }
  }

  render() {
    const { dispatch, listeVisible, panierVisible } = this.props;

    return (
      <div>
        <AjouterProduit
          onAddClick={(refProduit, nomProduit, prixProduit) =>
            dispatch(ajouterProduitListe(refProduit, nomProduit, prixProduit))
          }
        />
        <AjouterAuPanier
          onAddClick={(refProduit, nomProduit, prixProduit) =>
            dispatch(ajouterProduitPanier(refProduit, nomProduit, prixProduit))
          }
        />
        {this.affichageConditionnelListe(listeVisible, dispatch)}
        {this.affichageConditionnelPanier(panierVisible, dispatch)}
      </div>
    );
  }
}

// fonction qui prend l'état du store et renvoie les props qu'on va utiliser
function select(state) {
  return {
    listeVisible: state.listeProduits,
    panierVisible: state.panierProduits
  };
}

export default connect(select)(App);
