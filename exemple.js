//                              Document Object Model (DOM)
/****** Accéder aux éléments du DOM ******/

let header = document.getElementsByTagName("header"); // Récupérer un tableau de balise(s)
let logo = document.getElementById("logo"); // Récupérer un id
let container = document.getElementsByClassName("container"); // Récupérer un tableau de classe(s)
let h1 = document.querySelector("h1"); // Récupérer le premier sélecteur correspondant

console.log(header); // HTMLCollection [header]
console.log(logo); // div#logo
console.log(container); // HTMLCollection [div.container]
console.log(h1); // h1
