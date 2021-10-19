//                  LES CONDITIONS

let heure = 18;

// heure == 11 => égal
// heure != 11 => différent
// heure < 11 => inférieur
// heure > 11 => supérieur
// heure <= 11 => inférieur ou égal
// heure >= 11 => supérieur ou égal

if (heure < 12) {
  console.log("C'est le matin.");
} else if (heure < 18) {
  console.log("C'est l'après-midi.");
} else {
  console.log("C'est la soirée.");
}
