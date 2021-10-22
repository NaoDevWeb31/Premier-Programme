//                              LES ÉVÈNEMENTS
/****** Planifier l'exécution d'un script ******/

// setTimeout
let timer = setTimeout("alert('Bonjour')", 3000); // Popup "Bonjour" s'affiche au bout de 3s
clearTimeout(timer); // Arrêter le timer

// setInterval
let interval = setInterval("alert('Bonjour')", 5000); // Popup "Bonjour" s'affiche toutes les 5s après sa fermeture
clearInterval(interval); // Arrêter l'interval
