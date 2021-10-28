// Étape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");

// Étape 2 - Cacher l'erreur
error.style.display = "none";

// Étape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;

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
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(input.value) || input.value == "") {
    // Mettre notre bordure de formulaire en rouge (red)
    input.style.borderColor = "red";
  } else {
    // Incrémenter les coups de 1
    coups++;
    // Mettre notre bordure de formulaire en gris (silver)
    input.style.borderColor = "silver";
  }
});

// Étape 6 - Créer la fonction vérifier
