//                  LES CLOSURES (OU FERMETURES)

// // Fonction dans une fonction
// // Sauvegarder les variables locales qu'elle utilise

function bonjour(prenom) {

  let resultat = "Bonjour " + prenom; // locale
  let maClosure = () => console.log(resultat);
  return maClosure;

}

let maFonction = bonjour("Evan"); // stocke directement la variable "resultat"
maFonction(); // Bonjour Evan