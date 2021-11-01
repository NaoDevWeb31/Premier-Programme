//                              UTILISONS LES REQUÊTES ASYNCHRONES, CALLBACKS & PROMISES
/****** Les requêtes asynchrones ******/

// Attention, code puissant

function direBonjour() {
  console.log("bonjour");
}

setTimeout(direBonjour, 3000); // code asynchrone
console.log("test");
