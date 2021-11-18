//                              LES INCLASSABLES
/****** Utiliser le mode strict ******/

// Le mode strict : toujours placé au début (page ou fonction)
// "use strict";

prenom = "John";
console.log(prenom); // erreur silencieuse => affiche John

direBonjour(); // exemple.js:14 Uncaught ReferenceError: nom is not defined
addition(7, 1); // Uncaught SyntaxError: Duplicate parameter name not allowed in this context

function direBonjour() {
  "use strict";
  nom = "Doe";
  console.log(nom);
}

function addition(nombreA, nombreA) {
  "use strict";
  console.log(nombreA + nombreA);
}
