//                  LES FONCTIONS

let crie = "Toujours plus bas !"; // globale

function crieDeGuerre() {
  let crie = "Toujours plus fort !"; // locale
  console.log(crie);
}

crieDeGuerre();
console.log(crie);
