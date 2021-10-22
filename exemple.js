//                              Document Object Model (DOM)
/****** Ajouter des éléments au DOM ******/

// 1ère méthode : Juste écrire un texte
document.write("test"); // "test" écrit à la suite du contenu textuel

// 2e méthode : Ajouter un élément brut
let h1 = document.querySelector("h1");
h1.append("test"); // Bienvenue sur mon site !test

// 3e méthode : pour les objets
  // Créer l'élément (balise)
  let helloWorld = document.createElement("div");

  // Personnaliser l'élément - Challenge
  helloWorld.textContent = "Hello World !";

  // Ajouter l'élément à la page
    // #1
    // document.body.append(helloWorld);

    // #2
    document.body.appendChild(helloWorld); // Préférer append à appendChild => ne peut pas passer de texte
