//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Créer un objet littéral ******/

/// Généralement pas utilisé de cette façon
let mark = {
  prenom: "Mark", // propriété
  nom: "Zuckerberg",
  email: "mark@facebook.com",

  // Ajouter une méthode : fonction liée à un objet (ou à une classe)
  /// À l'ancienne
  sePresenter: function () {
    console.log("Bonjour, je m'appelle " + this.prenom);
  },
};

mark.sePresenter();

/// Utilisé pour transmettre des informations
function recevoirLesCoordonees() {
  return { latitude: 35, longitude: 139 };
}

let coordonnes = recevoirLesCoordonees();
console.log(coordonnes.latitude);
console.log(coordonnes.longitude);
