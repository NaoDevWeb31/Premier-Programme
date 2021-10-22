//                              LES ÉVÈNEMENTS
/****** Les écouteurs via le gestionnaire d'évènements ******/

let a = document.querySelector("a");
let button = document.querySelector("button");

// Au clic du lien
a.addEventListener("click", (e) => {
  console.log(e); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, type: "click", …}
});
