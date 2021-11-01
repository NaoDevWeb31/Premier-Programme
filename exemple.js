//                              DEVENEZ MAÎTRE DU TEMPS
/****** Transformer une date au format local ******/

let dateActuelle = new Date();

// toLocaleDateString = jour, mois, année
// toLocaleTimeString = heure
// toLocaleString     = jour, mois, année, heure
// ON CHOISI LES OPTIONS QU'ON VEUT

// Récupérer la date dans le format de langue locale du navigateur
let dateLocale = dateActuelle.toLocaleString(navigator.language, {
  weekday: "long", //  long (toutes les lettres), short (3 premières lettres), narrow (première lettre)
  year: "numeric", // numeric (xxxx), 2-digit (xx)
  month: "long", // long, short, narrow, numeric, 2-digit
  day: "numeric", // numeric, 2-digit
  hour: "numeric", // numeric, 2-digit
  minute: "numeric", // numeric, 2-digit
  second: "numeric", // numeric, 2-digit
});

console.log(dateLocale); // lundi 1 novembre 2021, 13:02:52
