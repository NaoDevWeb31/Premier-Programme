//                              Document Object Model (DOM)
/****** Accéder aux éléments du DOM ******/

let header = document.getElementsByTagName("header"); // Récupérer un tableau de balise(s)
let logo = document.getElementById("logo"); // Récupérer un id
let container = document.getElementsByClassName("container"); // Récupérer un tableau de classe(s)

console.log(header); // HTMLCollection [header]
console.log(logo); // div#logo
console.log(container); // HTMLCollection [div.container]
