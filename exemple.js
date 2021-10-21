//                  LES TABLEAUX

let monTableauAssociatif = {
  prenom: "Mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};

// Challenge
function concatener(tableauAssociatif) {
  var chaine = "";

  for (const valeur in tableauAssociatif) {
    chaine += (valeur + " : " + tableauAssociatif[valeur] + "\n");
  }

  return chaine;
}

console.log(concatener(monTableauAssociatif));
// prenom : Mark
// nom : Zuckerberg
// poste : PDG de Facebook
