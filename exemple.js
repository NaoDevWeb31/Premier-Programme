//                              DEVENEZ MAÎTRE DU TEMPS
/****** Utiliser les "templates string" avec les dates ******/

// Avant
// let prenom = "John";
// let bonjour = "Bonjour " + prenom;
// console.log(bonjour);

// Maintenant
// let prenom = "John";
// let bonjour = `Bonjour ${prenom}`; // `template string utilisé ${variable}`
// console.log(bonjour);

// Avec les dates
let date = new Date().getUTCFullYear();
let copyright = `${date} © Believemy`; // Utile pour la mise à jour automatique de la date
console.log(copyright); // 2021 © Believemy
