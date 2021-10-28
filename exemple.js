//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Créer un objet avec le constructeur Object ******/

// Propriétés spécifiques à l'objet
function Utilisateur(prenom, nom, email) {
  this.prenom = prenom;
  this.nom = nom;
  this.email = email;
}
// Méthodes générales
Utilisateur.prototype.sePresenter = function() {
  console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
}

// On crée un objet
var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates", "bill@gatenotes.com");

console.log(mark); // On voit que JavaScript ajoute une propriété __proto__ et constructor
/*
Utilisateur
  email: "mark@facebook.com"
  nom: "Zuckerberg"
  prenom: "Mark"
  [[Prototype]]: Object
    sePresenter: ƒ ()
    constructor: ƒ Utilisateur(prenom, nom, email)
    [[Prototype]]: Object 
*/
bill.sePresenter(); // Bonjour, je m'appelle Bill Gates et vous pouvez me contacter à l'adresse email bill@gatenotes.com

// Créer un objet avec Object()
var monObjet = new Object();
monObjet.titre = "Le titre de l'objet";
