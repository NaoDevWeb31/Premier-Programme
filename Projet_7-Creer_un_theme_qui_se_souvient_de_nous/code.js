// Étape 2 : Sélectionner les éléments nécessaires
let btn = document.querySelector("#mode");
let span = document.querySelector("span");

// Étape 6 : Regarder si la préférence de l'utilisateur existe déjà
if (localStorage.getItem("theme")) {
  // Vérifiez si l'élément 'theme' existe // Sa valeur est-elle égale à 'sombre' ?
  if (localStorage.getItem("theme") == "sombre") {
    // Appeler la fonction modeSombre()
    modeSombre();
  }
}

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

// Étape 5 : Créer la fonction modeSombre()
function modeSombre() {
  // Ajouter la classe 'dark' sur l'élément Body
  document.body.className = "dark";
  // Changer le texte du bouton grâce à l'élément span en "Thème clair"
  span.textContent = "Thème clair";
  // Définir avec localStorage un item qui s'appellera 'theme' et qui vaudra 'sombre'
  localStorage.setItem("theme", "sombre");
}
