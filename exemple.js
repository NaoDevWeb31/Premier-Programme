//                  LES BOUCLES

// Tant que le prénom est vide, il est demandé
do {

  var prenom = prompt("Quel est votre prénom ?"); // globale

} while (prenom == "" || prenom == null);

alert("Bonjour, " + prenom + " !");