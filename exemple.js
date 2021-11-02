//                              ET SI ON ÉCRIVAIT PLUS VITE AVEC JQUERY ?
/****** Modifier le contenu d'un élément avec jQuery et JavaScript ******/

// Avec JavaScript
document.querySelector("h1").textContent = "Bonjour avec JavaScript";
document.querySelectorAll("p");

// Avec jQuery
$("h1").text("Bonjour avec jQuery"); // On donne le sélecteur CSS
$("p"); // On sélectionne tous les paragraphes
