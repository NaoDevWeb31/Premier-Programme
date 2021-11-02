//                              LES INCLASSABLES
/****** Créer des modules (import, export) ******/

// Attention : impossible d'utiliser les modules si vous n'avez pas de serveur (https), la plupart des navigateurs bloquent les modules pour notre sécurité s'ils ne sont pas exécutés sur des serveurs

// index.js
import { direBonjour } from './modules/direBonjour.js';

// modules/direBonjour.js
export direBonjour(prenom) {
  console.log("Bonjour " + prenom);
}
