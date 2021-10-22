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

// Challenge //
// Au survol du bouton
button.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "orange";
});

function backgroundNone() {
  document.body.style.backgroundColor = "";
}

// Souris en dehors du bouton
button.addEventListener("mouseout", backgroundNone);
button.addEventListener("mouseout", () => {
  document.body.style.fontFamily = "serif";
});

// Supprimer un évènement
button.removeEventListener("mouseout", backgroundNone);
