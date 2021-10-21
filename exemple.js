//                  LE REST PARAMETER - Challenge

// Regroupement d'un tableau de pleins de valeurs => Avoir un nombre infini d'arguments
function addition(...nombres) {

  let resultat = 0;

  nombres.forEach((nombre) => {
    resultat += nombre;
  });
  
  console.log(resultat);
}

addition(4, 9, 5, 415, 78, 54); // 565
