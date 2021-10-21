//                  LES TABLEAUX

let panier = ["fraise", "banane", "poire"];

// Pour récupérer les éléments un par un
for (const fruit in panier) {
  // Modifier à la volée la valeur d'un élément du tableau
  panier[fruit] = "pomme";
}

console.log(panier); // ['pomme', 'pomme', 'pomme']
