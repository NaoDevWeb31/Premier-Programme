//                  LES BOUCLES

let i = 0;

while (i < 5) {

  // Si i est égal à 3, la boucle s'arrête
  if (i == 3) {
    i++;
    continue; // la ligne 3 n'est pas exécutée => passe à la prochaine itération
  }

  // Tant que i est inférieur à 5, afficher...
  console.log("Ligne : " + i);
  // i + 1
  i++;

}
