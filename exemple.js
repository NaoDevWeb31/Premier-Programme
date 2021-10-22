//                              LES ÉVÈNEMENTS - EXERCICE
/****** Faire un timer ******/

// Étape 2 - Récupérez grâce à JavaScript, votre élément button, et stockez-le dans une variable btn
let btn = document.querySelector("button");

// Étape 3 - Ajoutez un évènement sur votre bouton, qui se déclenchera au clic, et qui appellera la fonction start()
btn.addEventListener("click", start);

// Étape 4 - Créez une fonction start() qui aura pour but de créer une variable stockant un intervalle. Cet intervalle devra appeler une fonction decompte() toutes les secondes
/// Je vous conseille d’initialiser toutes vos variables à l’extérieur de vos fonctions pour pouvoir les utiliser partout (hors, évidemment, la variable qui contient notre intervalle)
let interval;

function start() {
  interval = setInterval(decompte, 1000);
}

// Étape 5 - Créez une fonction decompte() qui décrémentera dans un premier temps la variable secondes
/// Créez cette variable en-dehors de votre fonction
/// Puis, vérifiez si secondes vaut 0
/// Si c’est le cas, appelez la fonction stop()
/// sinon, affichez dans la page HTML, grâce à JavaScript, le nombre de secondes restantes (par exemple, s’il reste 5 secondes, écrivez « 5 » dans la page, à la suite des autres secondes, comme dans l’exemple ci-dessus)
let secondes = 10;

function decompte() {
  secondes--;
  if (secondes == 0) {
    stop();
  } else {
    document.body.innerHTML += `<div style="text-align:center; font-size:1.5rem; margin: 0rem 0em 1rem 0em;">${secondes}</div>`;
  }
}

// Étape 6 - Créez une fonction stop() qui arrêtera l’intervalle et qui se chargera d’écrire « Stop ! » dans la page
function stop() {
  clearInterval(interval);
  document.body.innerHTML += `<div style="text-align:center; font-size:3rem">Stop !</div>`;
}
