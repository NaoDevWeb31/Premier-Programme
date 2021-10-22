//                              Document Object Model (DOM)
/****** Ajouter des éléments au DOM ******/

// 1ère méthode : Juste écrire un texte
document.write("test"); // "test" écrit à la suite du contenu textuel

// 2e méthode : Ajouter un élément brut
document.body.append("test"); // à la suite du contenu textuel
let h1 = document.querySelector("h1");
h1.append("test"); // Bienvenue sur mon site !test
