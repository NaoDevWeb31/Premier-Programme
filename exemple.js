//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Comprendre l'héritage ******/

// Animal(nombreDePattes, poids)
function Animal(nombreDePattes, poids) {
  this.nombreDePattes = nombreDePattes;
  this.poids = poids;
}

// Oiseau(nombreDePattes, poids / longueurDesAiles)
function Oiseau(nombreDePattes, poids, longueurDesAiles) {
  // La fonction Call() permet d'appeler une fonction constructeur
  Animal.call(this, nombreDePattes, poids);
  this.longueurDesAiles = longueurDesAiles;
}

// Mammifere(nombreDePattes, poids / typeDePoils)
function Mammifere(nombreDePattes, poids, typeDePoils) {
  Animal.call(this, nombreDePattes, poids); // 1er paramètre => l'objet actuel (this) // 2e paramètre => les arguments pour son constructeur
  this.typeDePoils = typeDePoils;
}

var perroquet = new Oiseau(2, "1kg", "grandes");
console.log(perroquet);
