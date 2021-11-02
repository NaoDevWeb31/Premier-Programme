//                              ET SI ON ÉCRIVAIT PLUS VITE AVEC JQUERY ?
/****** Ajouter des animations avec jQuery et JavaScript ******/

$("h1").hide(); // cacher le titre
$("h1").show(); // afficher le titre

// au clic d'un paragraphe
$("p").click(() => {
  // $("h1").toggle(); // cacher ou afficher le titre
  // $("h1").fadeToggle(); // cacher ou afficher le titre avec un délai de transition
  // $("h1").slideToggle(); // cacher ou afficher le titre avec un effet de pliement/dépliement
  $("h1").animate({
    opacity: 0.7,
    margin: 30,
  });
});
