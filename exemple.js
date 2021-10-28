//                              LA PROGRAMMATION ORIENTÉE OBJET
/****** Comprendre l'héritage ******/

// Animal(nombreDePattes, poids)
function Animal(nombreDePattes, poids) {
  this.nombreDePattes = nombreDePattes;
  this.poids = poids;
}

// Oiseau(nombreDePattes, poids / longueurDesAiles)
function Oiseau(longueurDesAiles) {
  this.longueurDesAiles = longueurDesAiles;
}

// Mammifere(nombreDePattes, poids / typeDePoils)
function Mammifere(typeDePoils) {
  this.typeDePoils = typeDePoils;
}

var perroquet = new Oiseau("grandes");
console.log(perroquet);
