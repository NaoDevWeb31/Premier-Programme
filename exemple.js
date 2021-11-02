//                              ET SI ON ÉCRIVAIT PLUS VITE AVEC JQUERY ?
/****** Modifier les attributs d'un élément avec jQuery et JavaScript ******/

// Avec JavaScript
document.querySelector("h1").getAttribute("class"); // title
// document.querySelector("h1").setAttribute("style", "text-transform: lowercase");
document.querySelectorAll("p");

// Avec jQuery
$("h1").attr("class"); // sélectionner un attribut
$("h1").attr("style", "text-transform: lowercase"); // modifier un attribut
$("h1").after(`<a href="https://wikipedia.com">Wikipedia</a>`); // ajouter un lien après le titre h1
$("a").attr("href", "https://believemy.com"); // modifier l'url de l'élément lien ajouté
$("p");
