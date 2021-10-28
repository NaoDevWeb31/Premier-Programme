// Étape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");

// Étape 2 - Cacher l'erreur
error.style.display = "none";

// Étape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);

// Étape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    // Afficher le message d'erreur
    error.style.display = "inline";
  } else {
    // Cacher le message d'erreur
    error.style.display = "none";
  }
});

// Étape 5 - Agir à l'envoi du formulaire

// Étape 6 - Créer la fonction vérifier
