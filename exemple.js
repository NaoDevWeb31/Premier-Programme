//                  LES CONDITIONS - Challenge - Solution

// age
// -18 : Vous n'êtes pas majeur
// 18 et 20 : Vous êtes majeur en France
// 21+ : Vous êtes majeur partout, à vous les casinos !

let age = 40;

if (age < 18) {
  console.log("Vous n'êtes pas majeur.");
} else if (age < 21) {
  console.log("Vous êtes majeur en France.");
} else {
  console.log("Vous êtes majeur partout, à vous les casinos !");
}
