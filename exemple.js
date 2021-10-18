//                  LES FONCTIONS

function cuisiner(
  nombreDeGateaux,
  minutesDePreparation = 10,
  minutesDeCuisson = 15
) {
  let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
  return resultat;
}

console.log(cuisiner(5)); // 125
