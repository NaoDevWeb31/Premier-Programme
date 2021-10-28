//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Bind, Call & Apply ******/

// Call et Apply permettent d'invoquer immédiatement une fonction
// Call
// Animal.call(this, nombreDePattes, poids)

let gandalf = { titre: "Magicien" };

function direBonjour(arme, degats) {
  console.log("Bonjour " + this.titre + ", vous possédez " + arme + " qui donne " + degats + " points de dégâts.");
}

// Appeler l'objet gandalf pour le transmettre à direBonjour()
direBonjour.apply(gandalf, ["un bâton", 75]); // passer les arguments via un tableau (pour de gros fichiers JSON)
direBonjour.call(gandalf, "un bâton", 75); // passer les arguments un à un (pour passer certaines variables)

// Bind
// Objectif : Changer le contexte de "this"

this.valeur = "Window";

let monObjet = {
  valeur: "Objet",
  getValeur: function () {
    console.log(this.valeur);
  }
}

monObjet.getValeur(); // Objet

let maValeur = monObjet.getValeur;
maValeur(); // Window, car console.log(this.valeur) fait référence à l'objet global

// Pour corriger ce problème, on utilise bind(), qui va récréer une fonction avec le contexte de l'objet monObjet
let maValeurAvecBind = monObjet.getValeur.bind(monObjet); // ici, on "prend" le contexte de base
maValeurAvecBind(); // Objet