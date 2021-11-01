//                              UTILISONS LES REQUÊTES ASYNCHRONES, CALLBACKS & PROMISES
/****** Les promesses ******/

// En cours / Honorée / Rompue

// Exemple : Discord(), app de discussion en ligne, permet de parler aussi par micro.
    // Utilise l'asynchrone pour ne pas bloquer tant que vous n'acceptez pas l'utilisation du micro.

const promesse = new Promise((resolve, reject) => {
    // Tâches asynchrones

    // Promesse honorée : resolve()

    // Promesse rompue : reject()
});
