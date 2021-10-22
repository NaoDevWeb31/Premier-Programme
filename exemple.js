//                              LES ÉVÈNEMENTS - EXERCICE
/****** Faire un bouton "spoiler" ******/

// L’utilisateur clique sur le bouton, ce qui va activer une condition
/// La variable hidden vaut true ? Dans ce cas, on affiche le message, on change le texte du bouton en « Cacher », et on passe la variable hidden en false

/// La variable hidden vaut false ? Dans ce cas, on cache le message, on change le texte du bouton en « Afficher », et on passe la variable hidden en true

let btn = document.querySelector("button");
let div = document.querySelector("div");
let hidden = true;

btn.addEventListener("click");
