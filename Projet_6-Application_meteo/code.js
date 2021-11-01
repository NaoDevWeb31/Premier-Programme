let ville = "Paris";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  ville +
  "&appid=7f696922892169892adfe6c3b75c212c&units=metric";

let requete = new XMLHttpRequest(); // Créer l'objet permettant de faire la requête
requete.open("GET", url); // Récupérer les données
requete.responseType = "json"; // Nous attendons du JSON
requete.send(); // Envoyer la requête

// Dès qu'on reçoit une réponse, cette fonction est exécutée
requete.onload = function () {
  if (requete.readyState === XMLHttpRequest.DONE) {
    if (requete.status === 200) {
      let reponse = requete.response;
      console.log(reponse);
    }
  }
};
