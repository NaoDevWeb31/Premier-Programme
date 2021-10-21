//                  LES OBJETS

let nombres = [10, 45, 75, 10, 24, 45];

// let monSet = new Set(nombres);
let monSet = new Set(); // Créer un set

monSet.add("70"); // Ajouter un string au set
monSet.add(87); // Ajouter un number au set

monSet.delete(87); // Supprimer la valeur du set

console.log(monSet); // Set(1) {70}
