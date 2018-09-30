import React, { Component, PropTypes } from "react";

export default class AjouterAuPanier extends Component {
  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="inputRef">Référence produit</label>
          <input id="inputRef" ref="inputRef" type="text" />
          <br />
          <label htmlFor="inputNom">Nom produit</label>
          <input id="inputNom" ref="inputNom" type="text" />
          <br />
          <label htmlFor="inputPrix">Prix produit</label>
          <input id="inputPrix" ref="inputPrix" type="text" />
          <br />
          <button onClick={e => this.handleClick(e)}>Ajouter au panier</button>
        </fieldset>
      </div>
    );
  }
  handleClick(e) {
    const node1 = this.refs.inputRef;
    const refProduit = node1.value.trim(); // trim() permet de retirer les blancs debut et fin de chaine
    const node2 = this.refs.inputNom;
    const nomProduit = node2.value.trim();
    const node3 = this.refs.inputPrix;
    const prixProduit = node3.value;
    this.props.onAddClick(refProduit, nomProduit, prixProduit); // onAddClick c'est props du <AddTodo onAddClick = {text => dispatch}
    node1.value = "";
    node2.value = "";
    node3.value = "";
  }
}
