//                  LE SPREAD OPERATOR
// // Opérateur de décomposition

// Exemple 1 : fusionner plusieurs tableaux
let fruits = ["fraise", "banane", "poire"];
let aliments = ["chocolat", "sucre", "lait", ...fruits]; // ... décompose les éléments du tableau "fruits" un à un et les ajoute au tableau "aliments"

console.log(aliments); // ['chocolat', 'sucre', 'lait', 'fraise', 'banane', 'poire']
