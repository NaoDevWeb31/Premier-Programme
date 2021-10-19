//                  LES FONCTIONS & LA LOGIQUE - Exercice

function somme(nombre) { // 5
  if (nombre == 1) {
    return 1; // somme(1) = 1
  }
  return nombre + somme(nombre - 1); // 4
  // return 4 + somme(4 - 1) => 3
  // return 3 + somme(3 - 1) => 2
  // return 2 + somme(2 - 1) => 1
  // return 1

  // 5 + 4 + 3 + 2 + 1
}
console.log(somme(5));
