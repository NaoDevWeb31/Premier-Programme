//                  LES TABLEAUX

// Tableau simple
let monTableau = ["un", "deux", "trois", "quatre"];
// console.log(monTableau.join()); // un,deux,trois,quatre
// console.log(monTableau.join(", ")); // un, deux, trois, quatre
// console.log(monTableau.join(" / ")); // un / deux / trois / quatre

// Tableau dimensionnel
let monTableau2D = [
  ["Mark", "Jeff", "Bill"],
  ["Zuckerberg", "Bezos", "Gates"],
];
console.log(monTableau2D.join()); // Mark,Jeff,Bill,Zuckerberg,Bezos,Gates
console.log(monTableau2D.join(", ")); // Mark,Jeff,Bill, Zuckerberg,Bezos,Gates
console.log(monTableau2D[0].join(", ")); // Mark,Jeff,Bill
console.log(monTableau2D.join(" / ")); // Mark,Jeff,Bill / Zuckerberg,Bezos,Gates

// Tableau associatif
let monTableauAssociatif = {
  prenom: "Mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};
// console.log(monTableauAssociatif);
