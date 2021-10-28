// Étape 1 - Sélectionner nos éléments
let input = document.querySelector("#prix");
let error = document.querySelector("small");
let formulaire = document.querySelector("#formulaire");

// Étape 2 - Cacher l'erreur
error.style.display = "none";

// Étape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);

let coups = 0;
let nombreChoisi;

// Étape 6 - Créer la fonction vérifier

function verifier(nombre) {
  let instruction = document.createElement("div");
  if (nombre < nombreAleatoire) {
    // C'est plus
    instruction.textContent = "#" + coups + " (" + nombre + ") C'est plus !";
    instruction.className = "instruction plus";
  } else if (nombre > nombreAleatoire) {
    // C'est moins
    instruction.textContent = "#" + coups + " (" + nombre + ") C'est moins !";
    instruction.className = "instruction moins";
  } else {
    // Félicitations, vous avez trouvé le juste prix !
    instruction.textContent = "#" + coups + " (" + nombre + ") Félicitations, vous avez trouvé le juste prix !";
    instruction.className = "instruction fini";
  }
  
    // Ajouter l'élément devant les autres
    var instructions = document.querySelector("#instructions");
    instructions.prepend(instruction);
}

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
    // Stocker le nombre choisi par l'utilisateur
    nombreChoisi = input.value;
    // Réinitialiser le champ du formulaire
    input.value = "";
    verifier(nombreChoisi);
  }
});
