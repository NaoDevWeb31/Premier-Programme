//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Créer un objet avec une classe et un constructeur ******/

// class Utilisateur {
//   constructor(prenom, nom, email) {
//     this.prenom = prenom;
//     this.nom = nom;
//     this.email = email;
//   }

//   sePresenter(){
//     console.log("Je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email + ".");
//   }
// }

// var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
// mark.sePresenter();

class Animal {
  constructor(nombreDePattes, poids){
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
  }

  presentation(){
    console.log("Cet animal possède " + this.nombreDePattes + " pattes et fait " + this.poids + ".");
  }
}

class Oiseau extends Animal{ // Oiseau.prototype = Object.create(Animal.prototype)
  constructor(nombreDePattes, poids, longueurDesAiles){
    super(nombreDePattes, poids);
    this.longueurDesAiles = longueurDesAiles;
  }

  voler(){
    console.log("L'oiseau vole !");
  }
}

var perroquet = new Oiseau(2, "1kg", "grandes");
console.log(perroquet);
perroquet.presentation();
perroquet.voler();