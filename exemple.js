//                              ET SI ON ÉCRIVAIT PLUS VITE AVEC JQUERY ?
/****** Modifier le style d'un élément avec jQuery et JavaScript ******/

// Avec JavaScript
document.querySelector("h1").style.color = "orange";
// document.querySelector("#monId").className = "important";
// document.querySelector("#monId").className = ""; // Impossible de supprimer une classe avec JS
// document.querySelectorAll("p").style.color = "purple"; // Impossible de colorer tous les paragraphes d'un coup

// Avec jQuery
$("h1").css("color", "blue");
$("#monId").addClass("important");
$("#monId").removeClass("important");
$("p").css("color", "purple");
