//                  LES TABLEAUX

// Tableau simple
let monTableau = ["un", "deux", "trois", "quatre"];
monTableau.splice(0, 0, "random", "pie"); // ['random', 'pie', 'un', 'deux', 'trois', 'quatre']
console.log(monTableau);

// Tableau dimensionnel
let monTableau2D = [
  ["Mark", "Jeff", "Bill"],
  ["Zuckerberg", "Bezos", "Gates"],
];
// console.log(monTableau2D);

// Tableau associatif
let monTableauAssociatif = {
  prenom: "Mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};
// console.log(monTableauAssociatif);
