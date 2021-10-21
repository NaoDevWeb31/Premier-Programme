//                  LES OBJETS

let utilisateurs = new Map();

utilisateurs.set(
  // clé
  "Mark Zuckerberg",
  // valeur = un objet
  {
    email: "mark@facebook.com",
    poste: "PDG",
  }
); // Ajouter une paire clé-valeur à la Map "utilisateurs"

console.log(utilisateurs); // {"Mark Zuckerberg" => {email: 'mark@facebook.com', poste: 'PDG'}}
