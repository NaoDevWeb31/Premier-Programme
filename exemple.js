//                  BROWSER OBJECT MODEL (BOM)
// Objet "Navigator" //
• Fournir tout un tas d'informations sur le navigateur de nos utilisateurs
• Pour certaines, demander une permission grâce à une boîte de dialogue
• Récupérer la position géographique de l'utilisateur
• Permet d'utiliser certaines fonctionnalités du navigateur
  •• géolocalisation
  •• langue de l'utilisateur
  •• etc.
• ex: Afficher la date dans le bon format en récupérant la langue de l'utilisateur

// Les cookies sont-ils autorisés ?
navigator.cookieEnabled; // true

// Système d'exploitation ?
navigator.platform; // MacIntel

// Langue du navigateur ?
navigator.language;  fr-FR