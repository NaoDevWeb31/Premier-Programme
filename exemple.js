//                  LES FONCTIONS

function prevoirAge() {
  let age = prompt("Quel est votre âge ?");

  // age = parseInt(age); // Convertir une chaine en nombre entier
  age = Number(age); // Méthode RECOMMANDÉE pour convertir une chaine en nombre sans se prendre la tête

  alert("Bientôt, vous aurez " + (age + 1) + " !"); // "30" + 1 = 301
}

prevoirAge();
