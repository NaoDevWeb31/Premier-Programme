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
// let date = new Date().getUTCFullYear();
// let copyright = `${date} © Believemy`; // Utile pour la mise à jour automatique de la date
// console.log(copyright); // 2021 © Believemy

// Ou encore plus pratique : des calculs
let aliments = { fruits: 5, legumes: 1, biscuits: 75 };
let panier = `Dans votre panier, vous avez ${aliments.fruits + aliments.legumes + aliments.biscuits} articles.`;
console.log(panier); // Dans votre panier, vous avez 81 articles.
