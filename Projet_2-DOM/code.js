// Supprimer le div avec l'id #a-supprimer
document.querySelector("#a-supprimer").remove();

// Créer un header
let header = document.createElement("header");
document.body.insertBefore(header, document.querySelector("script"));
