//                              LES INCLASSABLES
/****** Géolocaliser un utilisateur ******/

// Pour géolocaliser on utilise l'objet geolocation

// Vérifier que la géolocalisation soit disponible
if ("geolocation" in navigator) {
  // getCurrentPosition() retourne une fois la position de l'utilisateur
                                    // OU
  // watchPosition() actualise la position plusieurs fois selon un délai variable
                    // 3 paramètres : success, error, options
  
  let options = {
    enableHighAccuracy: true, // par défaut : false
    // maximumAge: 0, // par défaut : 0ms
    // timeout: 10000, // par défaut : infinity
  }

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  }, error, options);

  function error(){
    alert("Vous avez refusé la géolocalisation.")
  }

} else {
  alert("La géolocalisation ne peut pas être utilisée.");
}
