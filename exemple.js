//                              UTILISER LES API
/****** Récupérer le prix du bitcoin (XMLHttpRequest) ******/

const url = "https://blockchain.info/ticker";

// Créer une requête
let requete = new XMLHttpRequest(); // Créer un objet
requete.open("GET", url); // 1er paramètre GET/POST // 2e paramètre : url
requete.responseType = "json"; // Nous attendons du JSON
requete.send(); // Nous envoyons la requête

// Dès qu'on reçoit une réponse, cette fonction est exécutée
requete.onload = function () {
  // Quand la requête est terminée
  if (requete.readyState === XMLHttpRequest.DONE) {
    // Si la requête a été traitée avec succès
    if (requete.status === 200) {
      let reponse = requete.response; // On stocke la réponse
      let prixEnEuros = reponse.EUR.last;
      console.log(prixEnEuros);
      document.querySelector("#price_label").textContent = prixEnEuros;
    } else {
      alert("Un problème est intervenu, merci de revenir plus tard.");
    }
  }
};
