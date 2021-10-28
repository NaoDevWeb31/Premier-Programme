//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Créer un objet avec une classe et un constructeur ******/

class Utilisateur {
  constructor(prenom, nom, email) {
    this.prenom = prenom;
    this.nom = nom;
    this.email = email;
  }

  sePresenter(){
    console.log("Je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email + ".");
  }
}

var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
mark.sePresenter();