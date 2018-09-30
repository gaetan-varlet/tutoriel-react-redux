export const AJOUT_PRODUIT_LISTE = "AJOUT_PRODUIT_LISTE";
export const AJOUT_PRODUIT_PANIER = "AJOUT_PRODUIT_PANIER";
export const SUPP_PRODUIT = "SUPP_PRODUIT";

let nextTodoId = 0;

function ajouterProduit(refProduit, nomProduit, prixProduit, pType) {
  return {
    type: pType,
    idProduit: nextTodoId++,
    refProduit,
    nomProduit,
    prixProduit
  };
}

export function ajouterProduitListe(refProduit, nomProduit, prixProduit) {
  return ajouterProduit(
    refProduit,
    nomProduit,
    prixProduit,
    AJOUT_PRODUIT_LISTE
  );
}

export function ajouterProduitPanier(refProduit, nomProduit, prixProduit) {
  return ajouterProduit(
    refProduit,
    nomProduit,
    prixProduit,
    AJOUT_PRODUIT_PANIER
  );
}

export function supprimerProduit(idProduit) {
  console.log(idProduit);
  return {
    type: SUPP_PRODUIT,
    idProduit
  };
}
