//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Bind, Call & Apply ******/

// Call et Apply permettent d'invoquer immédiatement une fonction
// Call
// Animal.call(this, nombreDePattes, poids)

let gandalf = { titre: "Magicien" };

function direBonjour() {
  console.log("Bonjour " + this.titre);
}
// Appeler l'objet gandalf pour le transmettre à direBonjour()
direBonjour.call(gandalf);
