//                  LES FONCTIONS

function prevoirAge() {
  let age = prompt("Quel est votre âge ?");

  // age = parseInt(age); // Convertir une chaine en nombre entier
  age = parseFloat(age); // Convertir une chaine en nombre décimal
  // age = Number(age); // Méthode RECOMMANDÉE pour convertir une chaine en nombre sans se prendre la tête

  // nombre = 45;
  // nombreEnString = nombre + ""; // Méthode "barbare" pour convertir un nombre en chaine;
  // nombreEnString = nombre.toString(); // Convertir un nombre en chaine

  alert("Bientôt, vous aurez " + (age + 1) + " !");
}

prevoirAge();
