//                              STOCKER DES DONNÉES DANS LE NAVIGATEUR AVEC JAVASCRIPT
/****** Les cookies ******/

// Pour utiliser un cookie => avoir un serveur locale ou avoir un site internet
// Simuler un serveur avec MAMP, WAMP, LAMP, XAMP

// Créer un cookie
document.cookie = "prenom=John";

// Afficher tous les cookies
// alert(document.cookie);

// Modifier un cookie
document.cookie = "prenom=Mark";

// Supprimer un cookie
document.cookie = "prenom=";
