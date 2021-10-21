//                  LES OBJETS

let voitureA = {
  constructeur: "Tesla",
  modele: "Cybertruck",
};

let voitureB = {
  constructeur: "Renault",
  modele: "Espace",
};

let voitures = new WeakSet([voitureA, voitureB]); // Créer un WeakSet en ajoutant les objets au WeakSet

console.log(voitures); // WeakSet {{constructeur, …}, {constructeur, …}}
