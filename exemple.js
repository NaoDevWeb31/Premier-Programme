//                  LES OBJETS

let voitures = new WeakSet(); // Créer un WeakSet => collection d'objets

let voitureA = {
  constructeur: "Tesla",
  modele: "Cybertruck",
};

let voitureB = {
  constructeur: "Renault",
  modele: "Espace",
};

voitures.add(voitureA); // Ajouter un objet au WeakSet
voitures.add(voitureB); // Ajouter un objet au WeakSet

console.log(voitures); // WeakSet {{constructeur, …}, {constructeur, …}}
