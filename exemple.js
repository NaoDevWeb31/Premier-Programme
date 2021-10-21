//                  LES TABLEAUX

// Tableau simple
let monTableau = ["un", "deux", "trois", "quatre"];
monTableau.pop(); // ["un", "deux", "trois"]
monTableau.shift(); // ["deux", "trois"]
// console.log(monTableau);

// Tableau dimensionnel
let monTableau2D = [
  ["Mark", "Jeff", "Bill"],
  ["Zuckerberg", "Bezos", "Gates"],
];
monTableau2D[0].pop(); // [ ["Mark", "Jeff"], ["Zuckerberg", "Bezos", "Gates"] ]
monTableau2D[1].shift(); // [ ["Mark", "Jeff"], ["Bezos", "Gates"] ]
monTableau2D.pop(); // [ ["Mark", "Jeff"] ]
monTableau2D.shift(); // []
// console.log(monTableau2D);

// Tableau associatif
let monTableauAssociatif = {
  prenom: "Mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};
delete(monTableauAssociatif.poste); // {prenom: 'Mark', nom: 'Zuckerberg'}
console.log(monTableauAssociatif);
