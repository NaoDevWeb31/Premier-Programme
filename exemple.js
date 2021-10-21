//                  LE SPREAD OPERATOR
// // Opérateur de décomposition

// Exemple 1 : fusionner plusieurs tableaux
let fruits = ["fraise", "banane", "poire"];
// Décomposer les éléments du tableau "fruits" un à un et les ajoute au tableau "aliments"
let aliments = ["chocolat", "sucre", "lait", ...fruits];

// console.log(aliments); // ['chocolat', 'sucre', 'lait', 'fraise', 'banane', 'poire']

// Exemple 2 : découper une chaîne de caractères en plusieurs éléments
let phrase = "Bonjour !";
let phraseTableau = [...phrase];

console.log(phraseTableau); // ['B', 'o', 'n', 'j', 'o', 'u', 'r', ' ', '!']
