// Étape 2 : Sélectionner les éléments nécessaires
let btn = document.querySelector("#mode");
let span = document.querySelector("span");

// Étape 3 : Rendre notre bouton fonctionnel
btn.addEventListener("click", () => {
  // Étape 4 : Changer les classes au clic
  if (document.body.classList.contains("dark")) {
    // Retirez toutes les classes de l'élément Body
    document.body.className = "";
    // Changez le texte du bouton grâce à votre élément span en "Thème sombre"
    span.textContent = "Thème sombre";
    // Définissez un élément localStorage, qui s'appellera 'theme' et qui aura pour valeur 'clair'
    localStorage.setItem("theme", "clair");
  } else {
    // Appelez la fonction modeSombre()
    modeSombre();
  }
});
