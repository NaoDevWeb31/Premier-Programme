//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Les prototypes (chaîne de prototypes) ******/

function Utilisateur(prenom, nom, email) {
  this.prenom = prenom;
  this.nom = nom;
  this.email = email;
  this.sePresenter = () => {
    console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email
    );
  };
}

// On crée un objet
var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates", "bill@gatenotes.com");

console.log(mark); // prototype => _proto_ ajouté automatique par JS (connaître le constructeur de notre objet et le constructeur du constructeur)