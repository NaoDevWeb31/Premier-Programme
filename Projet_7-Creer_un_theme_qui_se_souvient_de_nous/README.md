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

#### Étape 3 : Rendre notre bouton fonctionnel

Pour cette nouvelle étape, vous devrez rendre votre bouton fonctionnel.

- Pour cela, faites en sorte de détecter dès que l'utilisateur clique sur le bouton "Thème sombre".

Une fois que vous avez réussi à détecter le clic de votre utilisateur, faites une condition pour préparer la prochaine étape :

&nbsp;&nbsp;:arrow_right: L'élément Body a-t-il une classe 'dark' ?

Allez, je vais vous aider un peu pour cette partie car nous ne l'avons pas encore vu ensemble.
- Il va falloir récupérer toutes les classes de l'élément `body` grâce à la fonction `.classList`. Cette fonction retourne un tableau de toutes les classes sur un élément.

- Vous devrez utiliser la fonction `.contains('dark')` pour vérifier si la classe 'dark' est déjà présente.

#### Étape 4 : Changer les classes au clic

Vous savez maintenant si votre élément Body possède déjà la classe 'dark'. Dans ce cas, rien de plus simple !

Si la classe 'dark' est déjà présente, ceci veut dire que le thème actuel est le thème sombre. Donc :

- **Retirez** toutes les classes de l'élément Body

- **Changez** le texte du bouton grâce à votre élément `span` en "Thème sombre"

- **Définissez** un élément `localStorage`, qui s'appellera 'theme' et qui aura pour valeur 'clair'

Si la classe 'dark' n'est pas déjà présente, alors nous sommes sur le thème clair. Donc :

- **Appelez** la fonction `modeSombre()`, nous la créerons dans la prochaine étape.

#### Étape 5 : Créer la fonction modeSombre()

Nous devons maintenant créer la fonction `modeSombre()`.

Cette fonction devra :

- **Ajouter** la classe 'dark' sur l'élément Body

- **Changer** le texte du bouton grâce à l'élément `span` en "Thème clair"

- **Définir** avec `localStorage` un item qui s'appellera 'theme' et qui vaudra 'sombre'

À partir d'ici, votre programme fonctionnera déjà ! Mais notre préférence n'est pas encore prise en compte...

#### Étape 6 : Regarder si la préférence de l'utilisateur existe déjà

Dans cette dernière étape, vous devrez vérifier si l'utilisateur dispose déjà d'un item stocké sur son navigateur qui s'appelle 'theme'. Si c'est le cas, c'est que notre utilisateur a déjà choisi son mode préféré.

- Vérifiez si l'élément 'theme' existe

    - **Il existe ?** Sa valeur est-elle égale à 'sombre' ?

        - **Oui ?** On appelle la fonction `modeSombre()`

        - **Non ?** On ne fait rien

Et voici pourquoi nous créons une fonction `modeSombre()` et pas `modeClair()` ! Nous utilisons deux fois les instructions qui nous permettent de passer au mode sombre : quand l'utilisateur ouvre la page, et lorsqu'il clique sur le bouton pour changer de thème.

Or, nous n'aimons pas nous répéter. Donc, pour garder un code simple à maintenir, il faut créer une fonction qui nous permettra de ne pas le faire.