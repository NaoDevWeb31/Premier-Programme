//                              ET SI ON ÉCRIVAIT PLUS VITE AVEC JQUERY ?
/****** Ajouter des animations avec jQuery et JavaScript ******/

$("h1").hide(); // cacher le titre
$("h1").show(); // afficher le titre

$("p").click(() => {
  $("h1").hide();
});
