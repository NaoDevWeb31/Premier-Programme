//                              UTILISONS LES REQUÊTES ASYNCHRONES, CALLBACKS & PROMISES
/****** Async et Await ******/

function chargerScript(script) {
  return new Promise((resolve, reject) => {
    // Créer un nouvel élément
    let element = document.createElement("script");
    element.src = script;
    document.head.append(element);

    // Deux possibilités : resolve()
    element.onload = () => resolve("Fichier " + script + " a été chargé");

    // reject()
    element.onerror = () =>
      reject(new Error("Opération impossible pour le script " + script));
  });
}

async function resultat() {
  try {
    const scriptA = await chargerScript("test.js");
    console.log(scriptA);
    const scriptB = await chargerScript("autre.js");
    console.log(scriptB);
  } catch (error) {
    console.log(error);
    document.head.lastChild.remove();
  }
}

resultat();

// Async et Await "sucres syntaxiques"
// Utiliser les promesses de façon plus intuitives

// "async" devant une fonction => la forcer à retourner une promesse & pouvoir utiliser 'await' dans celle-ci.
async function direBonjour() {
  const promesse = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesse tenue !"), 3000);
  });

  // On attend que la promesse soit honorée ou rejetée, un peu comme then(), mais de façon plus intuitive
  // Si on place le mot-clé "await" devant une promesse, JavaScript est obligé d'attendre que celle-ci soit terminée.
  // Si elle est rompue, alors, il générera une exception.
  let resultat = await promesse;
  console.log(resultat);
}

direBonjour(); // Promesse tenue !
