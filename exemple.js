//                  LES CONDITIONS

let consommable = "chocolat";

switch (consommable) {
  case "courgette":
  case "carotte":
  case "pomme de terre":
    console.log("Ceci est un légume.");
    break;

  case "banane":
    console.log("Ceci est un fruit.");
    break;

  default:
    // mettre à la fin du switch
    // même rôle que "else"
    console.log("Ceci n'est ni un fruit ni légume.");
}
