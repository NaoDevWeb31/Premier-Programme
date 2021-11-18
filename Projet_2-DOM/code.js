// Supprimer le div avec l'id #a-supprimer
document.querySelector("#a-supprimer").remove();

// Créer un header
let header = document.createElement("header");
document.body.insertBefore(header, document.querySelector("script"));
header.style.backgroundColor = "#e3b04b";
header.style.margin = "-1rem -0.5rem 0rem -0.5rem";
header.style.padding = "1rem";
header.innerHTML = `<h1>Bienvenue</h1>`;
header.style.color = "white";
header.style.textAlign = "center";
header.style.fontSize = "1.5rem";

// Créer un sous-header
let sousHeader = document.createElement("header");
document.body.insertBefore(sousHeader, document.querySelector("script"));
sousHeader.style.backgroundColor = "#f1d6ab";
sousHeader.style.margin = "0rem -0.5rem";
sousHeader.style.padding = "1rem";
sousHeader.innerHTML = `<a href='#'>Accueil</a> / <a href='#'>Une autre page</a>`;

let links = sousHeader.querySelectorAll("a");
links.forEach((link) => (link.style.color = "#167BFF"));

// Créer un paragraphe
let p = document.createElement("p");
document.body.insertBefore(p, document.querySelector("script"));
p.textContent = "Ceci est un paragraphe crée avec JavaScript !";
p.style.margin = "1rem 0rem";
