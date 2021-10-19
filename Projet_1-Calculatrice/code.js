// Demander un mode de calcul
do {
  var choix = Number(
    prompt(
      "Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"
    )
  );
} while (choix !== 1 && choix !== 2 && choix !== 3 && choix !== 4);

// Demander deux nombres à utiliser
do {
  var premierNombre = Number(prompt("Entrez un premier nombre :"));
  var deuxiemeNombre = Number(prompt("Entrez un deuxième nombre :"));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

// Créer les 4 fonctions
function addition(nombreA, nombreB) {
  return nombreA + nombreB;
}

function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}

function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}

function division(nombreA, nombreB) {
  return nombreA / nombreB;
}

// Appeler la fonction à utiliser
switch (choix) {
  case 1:
    var resultat = addition(premierNombre, deuxiemeNombre);
    break;
  case 2:
    var resultat = multiplication(premierNombre, deuxiemeNombre);
    break;
  case 3:
    var resultat = soustraction(premierNombre, deuxiemeNombre);
    break;
  case 4:
    var resultat = division(premierNombre, deuxiemeNombre);
    break;
}

// Afficher le résultat
alert("Voici le résultat : " + resultat);
