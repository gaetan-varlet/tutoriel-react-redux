import React, { Component, PropTypes } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default class Produit extends Component {
  render() {
    return (
      <li>
        {this.props.idProduit} - {this.props.refProduit} -{" "}
        {this.props.nomProduit} - {this.props.prixProduit}{" "}
        <img
          id={this.props.idProduit}
          onClick={this.props.suppOnClick}
          src="../img/poubelle.jpg"
          width="25px"
        />
      </li>
    );
  }
}
