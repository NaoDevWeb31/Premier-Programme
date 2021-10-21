//                  LES OBJETS

let voitures = new WeakSet(); // Créer un WeakSet

let voitureA = {
  constructeur: "Tesla",
  modele: "Cybertruck",
};

voitures.add(voitureA); // Ajouter un objet au WeakSet

console.log(voitures); // WeakSet {{constructeur, …}}
