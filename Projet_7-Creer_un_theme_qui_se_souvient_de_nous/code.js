// Étape 2 : Sélectionner les éléments nécessaires
let btn = document.querySelector("#mode");
let span = document.querySelector("span");

// Étape 6 : Regarder si la préférence de l'utilisateur existe déjà
if (localStorage.getItem("theme")) {
  // Vérifiez si l'élément 'theme' existe // Sa valeur est-elle égale à 'sombre' ?
  if (localStorage.getItem("theme") == "sombre") {
    modeSombre(); // Appeler la fonction modeSombre()
  }
}

// Étape 3 : Rendre notre bouton fonctionnel
btn.addEventListener("click", () => {
  // Étape 4 : Changer les classes au clic
  if (document.body.classList.contains("dark")) {
    // Mode clair
    document.body.className = ""; // Retirez toutes les classes de l'élément Body
    span.textContent = "Thème sombre"; // Changez le texte du bouton grâce à votre élément span en "Thème sombre"
    localStorage.setItem("theme", "clair"); // Définissez un élément localStorage, qui s'appellera 'theme' et qui aura pour valeur 'clair'
  } else {
    // Mode sombre
    modeSombre(); // Appelez la fonction modeSombre()
  }
});

// Étape 5 : Créer la fonction modeSombre()
function modeSombre() {
  document.body.className = "dark"; // Ajouter la classe 'dark' sur l'élément Body
  span.textContent = "Thème clair"; // Changer le texte du bouton grâce à l'élément span en "Thème clair"
  localStorage.setItem("theme", "sombre"); // Définir avec localStorage un item qui s'appellera 'theme' et qui vaudra 'sombre'
}
