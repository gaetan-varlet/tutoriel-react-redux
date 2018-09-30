import React, { Component, PropTypes } from "react";
import Produit from "./Produit.js";

export default class ListeProduits extends Component {
  render() {
    return (
      <ul>
        <p>Liste de produits :</p>
        {this.props.listeProduits.map(produit => (
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
