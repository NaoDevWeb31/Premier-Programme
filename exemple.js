//                  LES FONCTIONS & LA LOGIQUE
// // Portée des variables

let variableLet = "globale";
var variableVar = "globale";

if (true) {
  let variableLet = "locale";
  var variableVar = "locale";

  console.log("let : " + variableLet); // locale
  console.log("var : " + variableVar); // locale
}

console.log("let : " + variableLet); // Reprend la valeur de départ définie avant la condition => globale
console.log("var : " + variableVar); // Garde la nouvelle valeur définie dans la condition => locale
