//                  LES CONDITIONS

let consommable = "pomme de terre";

switch (consommable) {
  case "carotte":
  case "pomme de terre": // possible d'en placer les uns à la suite des autres
    console.log("Ceci est un légume.");
    break; // sortir de la condition

  case "banane":
    console.log("Ceci est un fruit.");
    break;
}
