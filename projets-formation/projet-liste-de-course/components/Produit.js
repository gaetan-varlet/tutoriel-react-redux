import React, { Component, PropTypes } from "react";

export default class Produit extends Component {
  render() {
    return (
      <li id={this.props.idProduit} onClick={this.props.suppOnClick}>
        {this.props.idProduit} - {this.props.refProduit} -{" "}
        {this.props.nomProduit} - {this.props.prixProduit}
      </li>
    );
  }
}
