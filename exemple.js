//                              LES ÉVÈNEMENTS
/****** Gérer la propagations des évènements ******/

let article = document.querySelector("article");
let h1 = document.querySelector("h1");

// Parent
article.addEventListener("click", () => {
  alert("article cliqué"); // article cliqué
});

// Enfant
h1.addEventListener("click", (e) => {
  alert("titre cliqué"); // titre cliqué & article cliqué
  e.stopPropagation(); // On stoppe la propagation => titre cliqué
});
