//                  LES BOUCLES

try {
  // Erreur ?
  let recompense = prompt("Choisissez une récompense : épée, arc, haches");
  let degats;

  switch (recompense) {
    case "épée":
      degats = 40;
      break;
    case "arc":
      degats = 30;
      break;
    case "haches":
      degats = 20;
      break;
    default:
        throw new Error("Vous ne pouvez pas tricher !"); // Lancer une erreur qui est envoyer dans le bloc "catch"
  }
  
  alert("Vous avez choisi : " + recompense + " (" + degats + " dégâts).");
}
catch (error) {
  // Erreur !
  alert(error);
}
