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
  this.sePresenter = () => {
    console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
  };
}

// On crée un objet
var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates", "bill@gatenotes.com");

// mark.sePresenter();
// console.log(mark);

mark.poste = "PDG de Facebook";

// console.log(mark);
// console.log(bill);

function Logement(type, annee, placeDeParking, proprietaire) {
  this.type = type;
  this.annee = annee;
  this.placeDeParking = placeDeParking;
  this.proprietaire = proprietaire;
}

var appartementA = new Logement("Appartement", "2014", true, mark); // Mark est un objet

console.log(appartementA.proprietaire.prenom); // Mark
console.log(appartementA);
/* Logement {
  type: 'Appartement',
  annee: '2014',
  placeDeParking: true,
  proprietaire: {
    prenom: "Mark",
    nom: "Zuckerberg",
    email: "mark@facebook.com",
    sePresenter: () => {
      console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
    },
    poste: "PDG de Facebook",
  }
}*/