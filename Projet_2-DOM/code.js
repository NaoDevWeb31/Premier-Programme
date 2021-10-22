// Supprimer le div avec l'id #a-supprimer
document.querySelector("#a-supprimer").remove();

// Créer un header
let header = document.createElement("header");
document.body.insertBefore(header, document.querySelector("script"));

// Créer un sous-header
let sousHeader = document.createElement("header");
document.body.insertBefore(sousHeader, document.querySelector("script"));

// Créer un paragraphe
let p = document.createElement("p");
document.body.insertBefore(p, document.querySelector("script"));
