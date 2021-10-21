//                  LE REST PARAMETER
// // Ajouter un nombre infini d'arguments

// ...paramètre => REST parameter => regroupement d'un tableau de pleins de valeurs
function addition(...nombres) {

  nombres.forEach((nombre) => {
    console.log(nombre);
  });

}
addition(4, 9, 5, 415, 78, 54, 5);
// 4
// 9
// 5
// 415
// 78
// 54
// 5
