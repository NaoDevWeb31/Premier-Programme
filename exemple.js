//                              DEVENEZ MAÎTRE DU TEMPS
/****** Les Getter et les Setter disponibles de l'objet Date ******/

let dateActuelle = new Date();

// Récupérer l'année
console.log(dateActuelle.getFullYear()); // 2021

// Récupérer le jour de la semaine (0 pour dimanche, 6 pour samedi)
console.log(dateActuelle.getDay()); // 1

// Récupérer la date du jour
console.log(dateActuelle.getDate()); // 1

console.log(dateActuelle.getUTCDay()); // 1

dateActuelle.setFullYear(2750);
console.log(dateActuelle.getFullYear()); // 2750
