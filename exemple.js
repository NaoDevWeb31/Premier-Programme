//                              UTILISONS LES REQUÊTES ASYNCHRONES, CALLBACKS & PROMISES
/****** Les promesses ******/

// En cours / Honorée / Rompue

// Exemple : Discord(), app de discussion en ligne, permet de parler aussi par micro.
    // Utilise l'asynchrone pour ne pas bloquer tant que vous n'acceptez pas l'utilisation du micro.

// const promesse = new Promise((resolve, reject) => {
//     // Tâches asynchrones

//     // Promesse honorée : resolve()

//     // Promesse rompue : reject()
// });

function chargerScript(script) {
    return new Promise((resolve, reject) => {
        // Créer un nouvel élément
        let element = document.createElement("script");
        element.src = script;
        document.head.append(element);

        // Deux possibilités : resolve()
        element.onload = () => resolve("Fichier " + script + " a été chargé");

        // reject()
        element.onerror = () => reject(new Error("Opération impossible pour le script " + script));
    });
}

const promesse = chargerScript("test.js");

// Renvoi une erreur car le fichier test.js n'existe pas
promesse.then(
    function (result) {
        console.log(result);
    },
    function (error) {
        console.log(error);
    }
);