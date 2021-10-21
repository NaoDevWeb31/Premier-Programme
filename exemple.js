//                  LES OBJETS

let voitures = new WeakMap(); // Créer un WeakMap => collection de paires clé (objet)-valeur(tous types)

let index = {
  id: 1,
};

let voitureA = {
  constructeur: "Tesla",
  modele: "Cybertruck",
};

voitures.set(index, voitureA); // Ajouter la paire au WeakMap

console.log(voitures); // WeakMap {{id: 1} => {constructeur, …}}
