//                              LES ÉVÈNEMENTS
/****** Les écouteurs via les propriétés JavaScript ******/

let a = document.querySelector("a");
let button = document.querySelector("button");

// Au clic du lien
// a.onclick = function () {
//   if (confirm("Êtes-vous sûr ?")) {
//     location.href = "https://believemy.com";
//   }
// };

// Challenge
a.onclick = () => {
  if (confirm("Êtes-vous sûr ?")) {
    location.href = "https://believemy.com";
  }
};

// Au survol de la souris
// Challenge
button.onmouseover = () => {
  document.body.style.backgroundColor = "orange";
};
button.onmouseout = () => {
  document.body.style.backgroundColor = "";
};
