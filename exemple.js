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
monTableau2D[0].splice(0, 1); // [ ["Jeff", "Bill"], ["Zuckerberg", "Bezos", "Gates"] ]
console.log(monTableau2D);

// Tableau associatif
let monTableauAssociatif = {
  prenom: "Mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};
// console.log(monTableauAssociatif);
