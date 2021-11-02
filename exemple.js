//                              AMÉLIORONS NOS REQUÊTES AVEC FETCH & AXIOS
/****** Récupérer des données avec Axios ******/

const url = "https://blockchain.info/ticker";

async function recupererPrix() {
  // // Créer une requête
  // let requete = new XMLHttpRequest(); // Créer un objet
  // requete.open("GET", url); // 1er paramètre GET/POST // 2e paramètre : url
  // requete.responseType = "json"; // Nous attendons du JSON
  // requete.send(); // Nous envoyons la requête

  // // Dès qu'on reçoit une réponse, cette fonction est exécutée
  // requete.onload = function () {
  //   // Quand la requête est terminée
  //   if (requete.readyState === XMLHttpRequest.DONE) {
  //     // Si la requête a été traitée avec succès
  //     if (requete.status === 200) {
  //       let reponse = requete.response; // On stocke la réponse
  //       let prixEnEuros = reponse.EUR.last;
  //       document.querySelector("#price_label").textContent = prixEnEuros;
  //     } else {
  //       alert("Un problème est survenue, merci de revenir plus tard.");
  //     }
  //   }
  // };
  // console.log("Prix actualisé");

  // const requete = await fetch(url, {
  //   method: "GET",
  // });

  // if (!requete.ok) {
  //   alert("Un problème est survenue.");
  // } else {
  //   let donnees = await requete.json();
  //   // console.log(donnees);
  //   document.querySelector("span").textContent = donnees.EUR.last;
  // }

  axios.get(url)
  .then(function(donnees){
    // console.log(donnees);
    document.querySelector("span").textContent = donnees.data.EUR.last;
  })
  .catch(function(erreur){
    alert("Un problème est survenue.");
  })
  .then(function(){
    console.log("Mise à jour effectuée");
  });
}

setInterval(recupererPrix, 1000);
