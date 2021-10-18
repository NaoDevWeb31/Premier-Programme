//                  EXERCICES SUR LES FONCTIONS

// Exercice #2 : Avancé
// // La solution
function solutionCalculerIMC(poids, taille) {
  // Convertir la taille en mètres
  let tailleEnMetres = taille / 100;
  // Calcule la taille à la puissance 2
  let tailleCalculee = Math.pow(tailleEnMetres, 2); // tailleEnMetres²
  // Calcule l'IMC
  let resultat = poids / tailleCalculee;
  return resultat;
}

poids = prompt("Renseignez votre poids en kg :");
taille = prompt("Renseignez votre taille en cm :");
alert(
  "Votre indice de masse corporelle est de " +
    solutionCalculerIMC(poids, taille)
);
