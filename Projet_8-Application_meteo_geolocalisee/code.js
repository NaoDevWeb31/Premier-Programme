// Pour cacher la clé secrète
var appid = config.OPEN_WEATHER_APPID;

// Ville par défaut
let villeChoisie;

// Étape 2
if ("geolocation" in navigator) {
  // Étape 3
  navigator.geolocation.watchPosition((position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  });
} else {
  villeChoisie = "Paris";
  recevoirTemperature(villeChoisie); // Récupérer et afficher la météo de la ville choisie
}

let changerDeVille = document.querySelector("#changer");

// Au clic du bouton "Changer de ville"
changerDeVille.addEventListener("click", () => {
  // Demander à l'utilisateur de taper une ville
  villeChoisie = prompt("Quelle ville recherchez-vous ?");
  recevoirTemperature(villeChoisie); // Récupérer et afficher la météo de la ville choisie
});

function recevoirTemperature(ville) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=" +
    appid +
    "&units=metric";

  let requete = new XMLHttpRequest(); // Créer l'objet permettant de faire la requête
  requete.open("GET", url); // Récupérer les données
  requete.responseType = "json"; // Nous attendons du JSON
  requete.send(); // Envoyer la requête

  // Dès qu'on reçoit une réponse, cette fonction est exécutée
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let temperature = reponse.main.temp; // Récupérer la température
        let ville = reponse.name; // Récupérer la ville
        document.querySelector("#temperature_label").textContent = temperature; // Afficher la température
        document.querySelector("#ville").textContent = ville; // Afficher la ville
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}
