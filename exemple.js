//                  LES FONCTIONS

function prevoirAge() {
  let age = prompt("Quel est votre âge ?");

  age = parseInt(age); // Convertir une chaine en nombre entier

  alert("Bientôt, vous aurez " + (age + 1) + " !"); // "30" + 1 = 301
}

prevoirAge();
