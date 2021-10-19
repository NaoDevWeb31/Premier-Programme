//                  LES BOUCLES

try {
  // Erreur ?
  alert(hello);
}
catch (error) {
  // Erreur !
  // alert("La variable hello n'existe pas !");
  // console.log(error.stack);
  console.error(error.stack);
}
