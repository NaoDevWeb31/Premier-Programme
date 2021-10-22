//                  BROWSER OBJECT MODEL (BOM)
// Objet "Window" //
• Objet global
• La base de tous les autres objets du navigateur
• Action sur la fenêtre du navigateur


// Ouvrir une fenêtre
  window.open("https://believemy.com");

// Redimensionner une fenêtre
  let fenetre = window.open("https://believemy.com", "", "width=900, height=700");

  function resize() {
    fenetre.resizeTo(700, 470);
  }

// Fermer une fenêtre
  let fenetre = window.open("https://believemy.com", "", "width=900, height=700");

  function resize() {
    fenetre.close();
  }
