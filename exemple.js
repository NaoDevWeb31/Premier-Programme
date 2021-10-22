//                  Document Object Model (DOM)

• Tous les éléments pouvant être utilisés par l'objet Document, accessibles depuis JavaScript
  •• Toute la structure d'une page HTML (balise, classe, id, contenu)


=> Mettez votre balise <script></script> juste avant la fin de votre </body>
  • Donner le temps au navigateur de lire l'ensemble de notre page
  • Il saura parfaitement
    •• s'il y a des titres
    •• combien il y a de liens
    •• etc...
  • Il peut donc trouver nos éléments sans problème grâce à JavaScript

<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        ...
        ...
        ...
        ...
    // ICI //
        <script src="exemple.js"></script>
    </body>
</html>