//                              Document Object Model (DOM)
/****** Accéder aux éléments du DOM ******/

let header = document.getElementsByTagName("header"); // Récupérer un tableau de balise(s)
let logo = document.getElementById("logo"); // Récupérer un id

console.log(header); // HTMLCollection [header]
console.log(logo); // div#logo
