export const AJOUT_PRODUIT = "AJOUT_PRODUIT";
export const SUPP_PRODUIT = "SUPP_PRODUIT";

let nextTodoId = 0;

export function ajouterProduit(refProduit, nomProduit, prixProduit) {
  return {
    type: AJOUT_PRODUIT,
    idProduit: nextTodoId++,
    refProduit,
    nomProduit,
    prixProduit
  };
}

export function supprimerProduit(idProduit) {
  return {
    type: SUPP_PRODUIT,
    idProduit
  };
}
