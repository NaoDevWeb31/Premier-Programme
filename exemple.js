//                  LES CONDITIONS - Fiche technique sur les opérateurs de comparaison

// == : égal à la valeur
// === : égal à la valeur et au type
// != : différent de la valeur
// !== : différent de la valeur et du type
// > : supérieur
// < : inférieur
// >= : supérieur ou égal
// <= : inférieur ou égal

// Si nous prenons un exemple, voici la différence entre l'opérateur == et === :
let nombre = 3;

if (nombre == "3") {
  // vaudra "true"
}
if (nombre === "3") {
  // vaudra "false"
  // nombre est de type Number
}
