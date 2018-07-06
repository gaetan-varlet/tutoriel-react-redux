import { combineReducers } from "redux";
import { AJOUT_PRODUIT, SUPP_PRODUIT } from "../actions/actions.js";

// les actions déclenchent uniquement des modifications dans l'application
// les reducers spécifient ces modifications
// Nous utilisaons l'instruction switch pour rechercher une action AJOUT_PRODUIT
// un reducer est une fonction qui prend en paramètres state et action pour calculer et renvoyer le state mis à jour

// la première fonction todo sera utilisée pour créer un nouvel élément et la deuxième fonction va pousser l'élément dans la liste
function ajoutProduit(state, action) {
  switch (action.type) {
    case AJOUT_PRODUIT:
      return {
        idProduit: action.idProduit,
        refProduit: action.refProduit,
        nomProduit: action.nomProduit,
        prixProduit: action.prixProduit
      };
    default:
      return state;
  }
}

function listeProduitss(state = [], action) {
  switch (action.type) {
    case AJOUT_PRODUIT:
      return [...state, ajoutProduit(undefined, action)];
    case SUPP_PRODUIT:
      return state.filter((data, i) => data.idProduit != action.idProduit);

    default:
      return state;
  }
}

// nous ajoutons la fonction combineReducers où nous pouvons ajouter de nouveaux reducers
const produitApp = combineReducers({ listeProduitss });

export default produitApp;
