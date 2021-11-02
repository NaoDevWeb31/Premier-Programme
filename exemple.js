//                              ET SI ON ÉCRIVAIT PLUS VITE AVEC JQUERY ?
/****** Ajouter des animations avec jQuery et JavaScript ******/

$("h1").hide(); // cacher le titre
$("h1").show(); // afficher le titre

// au clic d'un paragraphe
$("p").click(() => {
  // $("h1").toggle(); // cacher ou afficher le titre
  $("h1").fadeOut(); // cacher le titre avec un délai de transition
});
