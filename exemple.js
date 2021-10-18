//                  LES FONCTIONS

let nombreUn = 4;
nombreDeux = 7;

function addition(nombreA, nombreB) {
  let result = nombreA + nombreB;
  // console.log(result);
  return result; // 11
}

function division(nombreA, nombreB) {
  let result = nombreA / nombreB;
  // console.log(result);
  return result; // 0.5714285714285714
}

let resultatAddition = addition(nombreUn, nombreDeux);
let resultatDivision = division(nombreUn, nombreDeux);

console.log(resultatAddition);
console.log(resultatDivision);
console.log(resultatAddition * resultatDivision); // 6.285714285714286
