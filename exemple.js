//                              Document Object Model (DOM)
/****** Modifier des éléments du DOM ******/

let h1 = document.getElementsByTagName("h1");

console.log(h1); // HTMLCollection [h1, textContent: 'Hello World', innerHTML: '<div style="font-weight: normal"> Hello World !</div>']

// Récupérer le premier élément du tableau HTMLCollection avant de modifier
h1 = h1[0];

// Modifier le contenu textuel grâce à la propriété "textContent"
h1.textContent = "Hello World";

// Modifier le contenu HTML grâce à la propriété "innerHTML"
h1.innerHTML = `<div style="font-weight: normal"> Hello World !</div>`;

console.log(h1);
