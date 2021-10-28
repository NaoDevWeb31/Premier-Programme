//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Créer un objet littéral ******/

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
