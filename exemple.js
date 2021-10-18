//                  LES FONCTIONS

let preparation = 10;
cuisson = 15;

function cuisiner(nombreDeGateaux, minutesDePreparation, minutesDeCuisson) {
  let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
  return resultat;
}

console.log(cuisiner(1, preparation, cuisson)); // 25
