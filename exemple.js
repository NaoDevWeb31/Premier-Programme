//                  LES TABLEAUX

// Tableau simple
let monTableau = ["un", "deux", "trois", "quatre"];
monTableau.splice(1, 0, "random", "pie"); // ['un', 'random', 'pie', 'deux', 'trois', 'quatre']
// console.log(monTableau);

// Tableau dimensionnel
let monTableau2D = [
  ["Mark", "Jeff", "Bill"],
  ["Zuckerberg", "Bezos", "Gates"],
];
// // CHALLENGE
monTableau2D.splice(2, 0, ["30", "45", "70"]); // [ ["Mark", Jeff", "Bill"], ["Zuckerberg", "Bezos", "Gates"], ["30", "45", "70"] ]
console.log(monTableau2D);

// Tableau associatif
let monTableauAssociatif = {
  prenom: "Mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};
// console.log(monTableauAssociatif);
