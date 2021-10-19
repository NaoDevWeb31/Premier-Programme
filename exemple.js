//                  LES CONDITIONS

let gareDeDepart = "Valenciennes";
let gareDArrivee = prompt("Où souhaitez-vous aller ?")
                    /* Création d'une valeur par défaut => */
                    || "Gare du Nord";
let chauffeur = "Naomi";

if ((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
  alert("Le train va démarrer à destination de " + gareDArrivee + ".");
} else {
  alert("Le train ne peut pas démarrer.");
}

/****************************************************************************************************/

// let x = 5;

// if (x > 3) {
//   console.log("x est supérieur à trois");
// } else {
//   console.log("x est inférieur à trois");
// }

// x > 3
//   ? console.log("x est supérieur à trois")
//   : console.log("x est inférieur à trois");
