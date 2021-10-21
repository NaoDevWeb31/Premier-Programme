//                  LES CLOSURES (OU FERMETURES)

// // Fonction dans une fonction
// // Sauvegarder les variables locales qu'elle utilise

// Avec closure
function bonjour(prenom) {

  let resultat = "Bonjour " + prenom; // locale
  let maClosure = () => console.log(resultat);
  return maClosure;

}
let maFonction = bonjour("Evan"); // stocke directement la variable "resultat"
maFonction(); // Bonjour Evan

// Sans closure
function bonjour_bis(prenom) {

  let resultat = "Bonjour " + prenom; // locale
  console.log(resultat);

}
bonjour_bis("Nicolas");