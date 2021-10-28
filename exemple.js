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
