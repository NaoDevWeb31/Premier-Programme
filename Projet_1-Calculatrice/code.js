// Étape 3 — Créer les 4 fonctions
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
    if (nombreB == 0) {
      // Étape 6 — Gérer l'exception
      throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
  }

  // Étape 1 — Demander un mode de calcul
do {
  var choix = Number(
    prompt(
      "Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"
    )
  );
} while (choix !== 1 && choix !== 2 && choix !== 3 && choix !== 4);

// Étape 2 — Demander deux nombres à utiliser
do {
  var premierNombre = Number(prompt("Entrez un premier nombre :"));
  var deuxiemeNombre = Number(prompt("Entrez un deuxième nombre :"));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre)); // Tant que les variables ne sont pas des Number

// Étape 4 — Appeler la fonction à utiliser
// Étape 6 — Gérer les exceptions
try {
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
    // Étape 6 — Gérer l'exception
    default:
      throw new Error("Une erreur est survenue !");
  }
  // Étape 5 — Afficher le résultat
  alert("Voici le résultat : " + resultat);
}
catch (error) {
  alert(error);
}
