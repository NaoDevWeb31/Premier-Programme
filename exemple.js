//                              ET SI ON ÉCRIVAIT PLUS VITE AVEC JQUERY ?
/****** Ajouter des évènements avec jQuery et JavaScript ******/

// Avec JavaScript
/* document.querySelector("h1").addEventListener("click", () => {
  document.querySelector("h1").style.color = "orange";
}); */
/* for (let i = 0; i < 2; i++) {
  document.querySelectorAll("p")[i].addEventListener("click", () => {
    document.querySelector("h1").style.color = "orange";
  });
} */

// Avec jQuery
/* $("h1").click(() => {
  $("h1").css("color", "orange"); // au clic, le titre devient orange
}); */

$("p").click(() => {
  $("h1").css("color", "orange"); // au clic d'un des paragraphes, le titre devient orange
});

$("h1").on("mouseover", () => {
  $("#monId").addClass("important"); // au survol du titre, le 1er paragraphe prend la classe "important"
});
