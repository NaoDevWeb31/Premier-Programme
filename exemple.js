//                              ET SI ON ÉCRIVAIT PLUS VITE AVEC JQUERY ?
/****** Ajouter et supprimer un élément avec jQuery et JavaScript ******/

// Avec JavaScript
document.querySelector("h1").prepend("Oh : "); // Ajouter devant avec JS
document.querySelector("h1").append(" !"); // Ajouter après avec JS
document.querySelectorAll("p");

// Avec jQuery
$("h1").prepend("Oh : "); // Ajouter devant avec jQuery
$("h1").append(" !"); // Ajouter après avec jQuery
$("h1").before("<div>Hello</div>"); // Nouveau div avant le titre h1
$("h1").after("<div>Hello</div>"); // Nouveau div après le titre h1
$("p");
