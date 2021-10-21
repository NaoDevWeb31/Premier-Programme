//                  LES TABLEAUX

// Tableau simple
let monTableau = ["un", "deux", "trois", "quatre"];
monTableau.push("cinq"); // ["un", "deux", "trois", "quatre", "cinq"]
monTableau.unshift("zero"); // ["zero", un", "deux", "trois", "quatre", "cinq"]
// console.log(monTableau);

// Tableau dimensionnel
let monTableau2D = [
  ["Mark", "Jeff", "Bill"],
  ["Zuckerberg", "Bezos", "Gates"],
];
monTableau2D[0].push("test"); // ["Mark", "Jeff", "Bill", "test"]
monTableau2D[1].unshift("test"); // ["test", Zuckerberg", "Bezos", "Gates"]
// console.log(monTableau2D);

// Tableau associatif
let monTableauAssociatif = {
  prenom: "Mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};
monTableauAssociatif["nationalité"] = "Américaine"; // {prenom: 'Mark', nom: 'Zuckerberg', poste: 'PDG de Facebook', nationalité: 'Américaine'}
console.log(monTableauAssociatif);
