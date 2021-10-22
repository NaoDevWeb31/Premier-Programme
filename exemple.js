//                              LES ÉVÈNEMENTS
/****** Les écouteurs via le gestionnaire d'évènements ******/

let a = document.querySelector("a");
let button = document.querySelector("button");

// Au clic du lien
a.addEventListener("click", () => {
  if (confirm("Êtes-vous sûr ?")) {
    location.href = "https://believemy.com";
  }
});
