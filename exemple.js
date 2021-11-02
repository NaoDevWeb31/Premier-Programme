//                              ET SI ON ÉCRIVAIT PLUS VITE AVEC JQUERY ?
/****** Ajouter des évènements avec jQuery et JavaScript ******/

// Avec JavaScript
/* document.querySelector("h1").addEventListener("click", () => {
  document.querySelector("h1").style.color = "orange";
}); */
document.querySelectorAll("p");

// Avec jQuery
$("h1").click(() => {
  $("h1").css("color", "orange"); // au clic, le titre devient orange
});
$("p");
