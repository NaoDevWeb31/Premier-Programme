//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Comprendre l'héritage ******/

// Animal(nombreDePattes, poids)
function Animal(nombreDePattes, poids) {
  this.nombreDePattes = nombreDePattes;
  this.poids = poids;
}
Animal.prototype.presentation = function () {
  console.log("Cet animal possède " + this.nombreDePattes + " pattes et fait " + this.poids + ".");
}

// Oiseau(nombreDePattes, poids / longueurDesAiles)
function Oiseau(nombreDePattes, poids, longueurDesAiles) {
  // La fonction Call() permet d'appeler une fonction constructeur
  // Faire hériter le constructeur Animal au constructeur Oiseau
  Animal.call(this, nombreDePattes, poids);
  this.longueurDesAiles = longueurDesAiles;
}
// Faire hériter le prototype du constructeur Animal au constructeur Oiseau
// Utiliser le prototype de notre constructeur hérité
Oiseau.prototype = Object.create(Animal.prototype);
// Rajouter la propriété constructor supprimée à la ligne du dessus
Oiseau.prototype.constructor = Oiseau;

// Mammifere(nombreDePattes, poids / typeDePoils)
function Mammifere(nombreDePattes, poids, typeDePoils) {
  Animal.call(this, nombreDePattes, poids); // 1er paramètre => l'objet actuel (this) // 2e paramètre => les arguments pour son constructeur
  this.typeDePoils = typeDePoils;
}

var perroquet = new Oiseau(2, "1kg", "grandes");
console.log(perroquet);
