//                  LES OBJETS

let utilisateurs = new Map();

utilisateurs.set("Mark Zuckerberg", {
  email: "mark@facebook.com",
  poste: "PDG",
});

utilisateurs.set(
  /* clé */ "Bill Gates",
  /* valeur */ {
    email: "bill@gatesnotes.com",
    poste: "Sauver le monde",
  }
); // Ajouter une paire clé-valeur à la Map "utilisateurs"

console.log(utilisateurs); // {"Mark Zuckerberg" => {email: 'mark@facebook.com', poste: 'PDG'}}, Bill Gates => {email: 'bill@gatesnotes.com', poste: 'Sauver le monde'}}

utilisateurs.delete("Bill Gates"); // Supprimer de la Map "utilisateurs" grâce à la clé

console.log(utilisateurs); // {"Mark Zuckerberg" => {email: 'mark@facebook.com', poste: 'PDG'}}
