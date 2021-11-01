//                              UTILISER LES API
/****** Récupérer le prix du bitcoin (XMLHttpRequest) ******/

const url = "https://blockchain.info/ticker";

// Créer une requête
let requete = new XMLHttpRequest(); // Créer un objet
requete.open("GET", url); // 1er paramètre GET/POST // 2e paramètre : url
requete.responseType = "json"; // Nous attendons du JSON
requete.send(); // Nous envoyons la requête
