## Projet #3 - Générateur de citations

### Objectif

Suivre les étapes liées à ce projet, ce qui vous permettra d'être dans les meilleures conditions pour le réaliser et progresser.

### Instructions

#### Étape 1 : Partir sur de bonnes bases

- Récupérez le petit fichier de base, qui contient déjà les fichiers HTML et CSS, ainsi qu'un tableau de citations

- Concentrez-vous sur l'aspect fonctionnel du projet

#### Étape 2 : Récupérer les éléments nécessaires

Récupérez les éléments nécessaires au fonctionnement de notre générateur de citations :

- L'emplacement qui contient la citation

- L'emplacement qui contient le nom de l'auteur

- Le bouton qui permet de générer une nouvelle citation

#### Étape 3 : Créer les variables utiles

Créez les variables qui vont seront utiles pour faire fonctionner votre projet :

- `dernier` - contient l'index de la question actuellement affichée (par défaut, la citation affichée est la première du tableau, sa valeur est donc égale à 0)

- `nombreAleatoire` - contient le nombre aléatoire généré

_Recommandation_ : Déclarez vos variables au début de votre fichier JavaScript, pour que vous puissiez les utiliser partout dans votre fichier ensuite.

#### Étape 4 : Détecter le clic du bouton "Nouvelle Citation"

Détectez lorsque le bouton "Nouvelle Citation" est cliqué.

_Recommandation_ : Reprenez ce que nous avons vu dans les sessions précédentes avec les évènements si vous n'y arrivez pas.

#### Étape 5 : Générer un nombre aléatoire

Votre bouton vient d'être cliqué et vous venez d'être alerté par JavaScript.
Générez un nombre aléatoire, qui nous permettra d'avoir un nombre entier entre 0 et 5, si nous avons 6 éléments dans notre tableau.

- Pour générer un nombre aléatoire avec JavaScript, il faut utiliser la fonction `Math.random()`. Elle génère un nombre à virgule (donc un flottant), entre 0 et 1

- Utilisez ma fonction `genererNombreEntier(max)`, qui prend en paramètre le **nombre d'éléments dans votre tableau de citations**. N'hésitez pas à la réutiliser !
  - Cette fonction utilise la fonction `Math.floor()` qui renvoie le plus grand entier qui est inférieur ou égal à un nombre.
  - Par exemple, si je fais `Math.floor(5.8)`, elle me renvoie 5.

_Recommandation_ : Utilisez une boucle `do...while` pour cette étape. Ceci vous permettra de générer un nombre tant que ce dernier est égal au nombre de la variable `dernier`. Afin de ne pas afficher deux fois de suite la même citation.
