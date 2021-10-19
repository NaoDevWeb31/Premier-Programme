//                  LES BOUCLES


let prenom;

// Tant que le prénom est vide, il est demandé
do {

  prenom = prompt("Quel est votre prénom ?");

} while (prenom == "" || prenom == null);

alert("Bonjour, " + prenom + " !");