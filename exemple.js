//                              LE STYLE
/****** Modifier le style des éléments ******/

// 1ère méthode : décomposée
let header = document.querySelector("header");

header.style.backgroundColor = "#FFBD69";

// 2e méthode : directe
document.querySelector("h1").style.color = "#111D5E";
  // Challenge
  document.querySelector("h1").style.textAlign = "center";

// 3 méthode : avec une classe
document.querySelector("header").className = "ma_class";
