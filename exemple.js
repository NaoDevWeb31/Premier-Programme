//                  LES TABLEAUX

// let monTableau = new Array("un", "deux", "trois");
// let monTableau = Array("un", "deux", "trois");
let monTableau = ["un", "deux", "trois"]; // Désormais

// Accéder à un élément du tableau
console.log(monTableau[2]); // trois

// Ancienne version - Tableau multidimensionnel
// let monTableau2D = new Array(
//   Array("Mark", "Jeff", "Bill"),
//   Array("Zuckerberg", "Bezos", "Gates")
// );

// Nouvelle version - Tableau multidimensionnel
let monTableau2D = [
  ["Mark", "Jeff", "Bill"],
  ["Zuckerberg", "Bezos", "Gates"],
];

// Accéder à un élément d'un tableau multidimensionnel
console.log(monTableau2D[0][2]); // Mark

// Tableau associatif
let monTableauAssociatif = {
  prenom: "Mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};

// Accéder à un élément d'un tableau associatif
console.log(monTableauAssociatif["poste"]); // PDG de Facebook
