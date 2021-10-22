//                              LES ÉVÈNEMENTS - EXERCICE
/****** Faire un bouton "spoiler" ******/

// L’utilisateur clique sur le bouton, ce qui va activer une condition
/// La variable hidden vaut true ? Dans ce cas, on affiche le message, on change le texte du bouton en « Cacher », et on passe la variable hidden en false

/// La variable hidden vaut false ? Dans ce cas, on cache le message, on change le texte du bouton en « Afficher », et on passe la variable hidden en true

let btn = document.querySelector("button");
let div = document.querySelector("div");
let hidden = true;

// Cacher le message dès le départ
div.style.visibility = "hidden";

// Au clic du bouton
btn.addEventListener("click", () => {
  // Si hidden = true
  if (hidden) {
    div.style.visibility = "visible"; // afficher le message
    btn.textContent = "Cacher"; // le bouton dit "Cacher"
    hidden = false;
  } /* Sinon */ else {
    div.style.visibility = "hidden"; // cacher le message
    btn.textContent = "Afficher"; // le bouton dit "Afficher"
    hidden = true;
  }
});
