//                              STOCKER DES DONNÉES DANS LE NAVIGATEUR AVEC JAVASCRIPT
/****** LocalStorage & SessionStorage ******/

// LocalStorage = Stocké dans le navigateur MÊME APRÈS qu'il soit fermé => conseillé
// SessionStorage = Stocké dans le navigateur PENDANT la session
// Jamais envoyé au serveur contrairement aux cookies
// Plus simple à utiliser qu'un cookie

// Et les cookies ?

// setItem[clé], [valeur]) // getItem[clé] // removeItem[clé]
// clear() : supprimer tout
// key([index]) : obtenir la clé située à l'index donnée
// length : obtenir le nombre d'éléments stockés

if (localStorage.getItem("prenom")) {
  document.body.append("Bonjour " + localStorage.getItem("prenom"));
} else {
  let prenom = prompt("Quel est votre prénom ?");
  localStorage.setItem("prenom", prenom);
  document.body.append(prenom);
}

localStorage.clear();