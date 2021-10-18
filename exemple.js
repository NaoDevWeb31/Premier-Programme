//                  EXERCICES SUR LES FONCTIONS

// Exercice #2 : Avancé
// // Ma méthode
function calculerIMC(poids, taille) {
  poids = prompt("Renseignez votre poids en kg :");
  taille = prompt("Renseignez votre taille en m :");

  poids = parseFloat(poids);
  taille = parseFloat(taille);

  let resultat = poids / taille ** 2;
  return resultat;
}

alert("Votre indice de masse corporelle est de " + calculerIMC());
