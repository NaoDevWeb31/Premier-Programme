//                              LES ÉVÈNEMENTS
/****** Les écouteurs ******/

let a = document.querySelector("a");
let button = document.querySelector("button");

// Au clic du lien
a.onclick = function () {
  if (confirm("Êtes-vous sûr ?")) {
    location.href = "https://believemy.com";
  }
};
