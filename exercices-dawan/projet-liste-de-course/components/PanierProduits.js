import React, { Component, PropTypes } from "react";
import Produit from "./Produit.js";

export default class PanierProduits extends Component {
  render() {
    return (
      <ul>
        <p>Panier de produits :</p>
        {this.props.panierProduits.map(produit => (
          <Produit
            key={produit.idProduit}
            {...produit}
            suppOnClick={this.props.deleteClick}
          />
        ))}
      </ul>
    );
  }
}
