//                              Document Object Model (DOM)
/****** Accéder aux éléments du DOM ******/

let header = document.getElementsByTagName("header"); // Récupérer un tableau de balise(s)
let logo = document.getElementById("logo"); // Récupérer un id
let container = document.getElementsByClassName("container"); // Récupérer un tableau de classe(s)
let h1 = document.querySelector("h1"); // Récupérer le premier sélecteur correspondant
let p = document.querySelectorAll("p"); // Récupérer un tableau de tous les sélecteurs correspondants

console.log(header); // HTMLCollection [header]
console.log(logo); // div#logo
console.log(container); // HTMLCollection [div.container]
console.log(h1); // h1
console.log(p); // NodeList(2) [p, p]
