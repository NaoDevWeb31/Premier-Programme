//                  LES TABLEAUX

let monTableauAssociatif = {
  prenom: "Mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};

let chaine = "";

// Concaténer un tableau associatif
for (const valeur in monTableauAssociatif) {
  chaine += valeur + " : " + monTableauAssociatif[valeur] + "\n";
}

console.log(chaine);
// prenom : Mark
// nom : Zuckerberg
// poste : PDG de Facebook
