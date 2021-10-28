//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Créer un objet avec un constructeur personnalisé ******/

// let mark = {
//   prenom: "Mark", // propriété
//   nom: "Zuckerberg",
//   email: "mark@facebook.com",

//   // Ajouter une méthode : fonction liée à un objet (ou à une classe)
//   /// À l'ancienne
//   sePresenter: function () {
//     console.log("Bonjour, je m'appelle " + mark.prenom);
//   },
// };

// On crée une fonction constructeur pour nos utilisateurs
// convention : constructeur avec la 1ère lettre en majuscule
function Utilisateur(prenom, nom, email) {
  this.prenom = prenom; // l'objet en cours = l'objet créé à partir du constructeur
  this.nom = nom; // mark.prenom = prenom
  this.email = email;
}

// On crée un objet
var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates", "bill@gatenotes.com");

console.log(mark.prenom);
console.log(bill.prenom);
