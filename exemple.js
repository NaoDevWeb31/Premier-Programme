//                              LES ÉVÈNEMENTS - EXERCICE
/****** Faire un timer ******/

// Étape 2 - Récupérez grâce à JavaScript, votre élément button, et stockez-le dans une variable btn
let btn = document.querySelector("button");

// Étape 3 - Ajoutez un évènement sur votre bouton, qui se déclenchera au clic, et qui appellera la fonction start()
btn.addEventListener("click", start);

// Étape 4 - Créez une fonction start() qui aura pour but de créer une variable stockant un intervalle. Cet intervalle devra appeler une fonction decompte() toutes les secondes
/// Je vous conseille d’initialiser toutes vos variables à l’extérieur de vos fonctions pour pouvoir les utiliser partout (hors, évidemment, la variable qui contient notre intervalle)
function start() {
  var interval = setInterval(decompte, 1000);
}
