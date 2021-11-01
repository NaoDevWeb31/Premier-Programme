## Projet #5 - Fight Simulator

### Objectif

Dans ce projet, nous allons revoir ensemble le concept de programmation orientée objet.

Nous utiliserons plus particulièrement les **classes** et l'**héritage** grâce à un petit jeu dans la console, juste pour être sûr d'avoir bien compris la notion de programmation orientée objet.

<p align="center">
  <img width="700" src="https://img-c.udemycdn.com/redactor/raw/2019-12-10_17-28-18-3d397abd039103636b47c90fc15eb7c5.png" title="Aperçu du projet" name="Aperçu" >
</p>

### Instructions

#### Étape 1 : Partir sur de bonnes bases

- Pour partir sur de bonnes bases, je vous invite à suivre ce projet directement sur Visual Studio Code.

#### Étape 2 : Comprendre la structure des classes

Nous utiliserons les **classes** dans ce projet. Voici les informations concernant les classes que vous devrez créer pour faire fonctionner notre jeu de combat, **nous créerons ces classes dans les prochaines étapes** :

- La classe Personnage

| Propriétés | Méthodes | Getters |
| ------ | ------ | ------ |
| `pseudo` | `evoluer()` - Augmente le niveau personnage de 1, et affiche "[pseudo] passe au niveau [niveau] !"' | 'informations()' - Affiche les informations du personnage "[pseudo] ([classe]) a [sante] points de vie et est au niveau [niveau]." |
| `classe` (magicien ou guerrier) | `verifierSante()` - Vérifie si la santé du personnage est inférieure ou égale à 0. Si c'est le cas, réinitialise la santé à 0 pour ne pas avoir de points de vie négatifs et affiche "[pseudo] a perdu !" |  |
| `sante` |  |  |
| `attaque` |  |  |
| `niveau` (initialisé à 1) |  |  |

- La classe Magicien **hérite** de Personnage

 Propriétés | Méthodes |
| ------ | ------ |
| Aucune. Se contente d'appeler le constructeur de Personnage, en lui donnant en paramètres (pseudo, "magicien", 170, 90). Donc vous l'aurez compris, pour initialiser un joueur, il faudra appeler le constructeur de la classe que nous voulons, et donner juste un pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier). | `attaquer(personnage)` - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, et affiche "[pseudo] attaque [personnage.pseudo] en lançant un sort ([attaque] dégâts)". Ensuite, appelle la fonction `evoluer()`. Puis, appelle la fonction `verifierSante()` du personnage adverse. |
|  | `coupSpecial(personnage)` - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personne en cours, fois 5, et affiche "[pseudo] attaque avec son coup spécial puissance des arcanes [personnage.pseudo] ([attaque * 5] dégâts)".  Ensuite, appelle la fonction `evoluer()`. Puis, appelle la fonction `verifierSante()` du personnage adverse. |

- La classe Guerrier **hérite** de Personnage

 Propriétés | Méthodes |
| ------ | ------ |
| Aucune. Se content d'appeler le constructeur de Personnage, en lui donnant en paramètres (pseudo, "guerrier", 350, 50). Donc vous l'aurez compris, pour initialiser un joueur, il faudra appeler le constructeur de la classe que nous voulons, et donner juste un pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier). | `attaquer(personnage)` - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, et affiche "[pseudo] attaque [personnage.pseudo] avec son épée ([attaque] dégâts)". Ensuite, appelle la fonction `evoluer()`. Puis, appelle la fonction `verifierSante()` du personnage adverse. |
|  | `coupSpecial(personnage)` - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personne en cours, fois 5, et affiche "[pseudo] attaque avec son coup spécial haches de guerre [personnage.pseudo] ([attaque * 5] dégâts)".  Ensuite, appelle la fonction `evoluer()`. Puis, appelle la fonction `verifierSante()` du personnage adverse. |

#### Étape 3 : Créer la classe Personnage

Nous allons commencer par créer la classe `Personnage`. Voici un rappel de ce que vous devez faire :

##### Propriétés

- `pseudo`

- `classe` (magicien ou guerrier)

- `sante`

- `attaque`

- `niveau` (initialisé à 1)

##### Méthodes :

- `evoluer()` - Augmente le niveau personnage de 1, et affiche "[pseudo] passe au niveau [niveau] !"'

- `verifierSante()` - Vérifie si la santé du personnage est inférieure ou égale à 0. Si c'est le cas, réinitialise la santé à 0 pour ne pas avoir de points de vie négatifs et affiche "[pseudo] a perdu !"

##### Getters :

- `informations()` - Affiche les informations du personnage "[pseudo] ([classe]) a [sante] points de vie et est au niveau [niveau]."