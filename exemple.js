//                              ET SI ON ÉCRIVAIT PLUS VITE AVEC JQUERY ?
/****** Modifier le contenu d'un élément avec jQuery et JavaScript ******/

// Avec JavaScript
document.querySelector("h1").textContent = "Bonjour avec JavaScript";
// document.querySelectorAll("p").textContent = "Ceci est un paragraphe"; // Impossible
document.querySelector(
  ".maClass"
).innerHTML = `<p><strong>HTML modifié avec JavaScript</strong></p>`;

// Avec jQuery
$("h1").text("Bonjour avec jQuery"); // On donne le sélecteur CSS
// $("p").text("Ceci est un paragraphe"); // On sélectionne tous les paragraphes
$(".maClass").html("<p><strong>HTML modifié avec jQuery</strong></p>");
