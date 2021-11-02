## Projet #7 - Créer un thème qui se souvient de nous

### Objectif

Dans ce projet, vous allez pouvoir vous exercer sur le stockage de données, que nous avons vu dans la section précédente.

Nous allons **créer un bouton qui permettra de passer du mode sombre au mode clair et qui se souviendra du choix de l'utilisateur la prochaine fois qu'il ira sur le site**.

<p align="center">
  <img width="500" src="https://img-c.udemycdn.com/redactor/raw/2019-12-10_16-03-38-05cce00c567c122c54cdcea42f9f8dec.gif" title="Aperçu du projet" name="Aperçu" >
</p>

### Instructions

#### Étape 1 : Comprendre le fonctionnement du programme

Voici comment va fonctionner notre programme :

- L'utilisateur arrive sur le site : existe-t-il un `localStorage` qui s'appelle "theme" ?

  | Oui | Non |
  :---- | ----:
  | Sa valeur est égale à "sombre" ? <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Oui : on appelle la fonction `modeSombre()` <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Non : on ne fait rien | On ne fait rien |

<br/>

- L'utilisateur clique sur le bouton pour changer de thème : Body a-t-il une classe "dark" ?

  | Oui | Non |
  :---- | ----:
  | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- On retire les classes de Body <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- On change le texte du bouton en "Thème sombre" <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- On définit le `localStorage` avec le nom "theme" sur "clair" | On appelle la fonction `modeSombre()` |

<br/>

La fonction `modeSombre()` va se charger :

- De mettre la classe de Body sur "dark"

- De changer le texte du bouton en "Thème clair"

- De définir le `localStorage` avec le nom "theme" sur "sombre"

#### Étape 2 : Sélectionner les éléments nécessaires

Dans cette première vraie étape, je vous invite à sélectionner les éléments qui vous seront nécessaires :

- Le bouton pour changer le thème actuel (#mode)

- Le span qui contient le texte du bouton (span)