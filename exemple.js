//                              AMÉLIORONS NOS REQUÊTES AVEC FETCH & AXIOS
/****** Envoyer des données avec Axios ******/
const url = "https://lesoublisdelinfo.com/api.php";

// let requete = new XMLHttpRequest();

// GET
// requete.open("GET", url);
// requete.responseType = "json";
// requete.send();

// POST
// requete.open("POST", url);
// requete.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// requete.responseType = "json";
// requete.send("prenom=John"); // pour envoyer plusieurs paramètres => prenom=John&nom=Doe

// requete.onload = function () {
//   if (requete.readyState === XMLHttpRequest.DONE) {
//     if (requete.status === 200) {
//       let reponse = requete.response;
//       console.log(reponse);
//     } else {
//       alert("Un problème est intervenu, merci de revenir plus tard.");
//     }
//   }
// };

// async function envoyerPrenom(prenom) {
//   const requete = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: new URLSearchParams({
//       prenom,
//     }),
//   });

//   if (!requete.ok) {
//     alert("Un problème est survenue.");
//   } else {
//     const donnees = await requete.json();
//     console.log(donnees);
//   }
// }

// envoyerPrenom("Elon");

axios.post(url, {
    prenom: "Steve",
  })
  .then(function (donnees) {
    console.log(donnees);
  })
  .catch(function (erreur) {
    console.log(erreur);
  });
