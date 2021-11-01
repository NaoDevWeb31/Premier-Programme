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

#### Étape 4 : Créer la classe Magicien

Il faut maintenant créer notre classe `Magicien`. Cette classe **hérite** de la classe Personnage, pensez donc à bien le préciser lorsque vous créez votre classe ! Voici un rappel de ce que vous devez faire :

##### Propriétés

- Aucune. Se contente d'appeler le constructeur de `Personnage`, en lui donnant en paramètres (pseudo, "magicien", 170, 90). Donc vous l'aurez compris, pour initialiser un joueur, il faudra appeler le constructeur de la classe que nous voulons, et donner juste un pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier).

##### Méthodes :

- `attaquer(personnage)` - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, et affiche "[pseudo] attaque [personnage.pseudo] en lançant un sort ([attaque] dégâts)". Ensuite, appelle la fonction `evoluer()`. Puis, appelle la fonction `verifierSante()` du personnage adverse.

- `coupSpecial(personnage)` - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, fois 5, et affiche "[pseudo] attaque avec son coup spécial puissance des arcanes [personnage.pseudo] ([attaque * 5] dégâts)". Ensuite, appelle la fonction `evoluer()`. Puis, appelle la fonction `verifierSante()` du personnage adverse.

__Quelques précisions__ :

Lorsque vous retirez des points de vie, vous devrez en venir à ce code :

<pre><code>personnage.sante -= this.attaque;<br/>
// OU POUR coupSpecial :<br/>
personnage.sante -= this.attaque * 5;</code></pre>

#### Étape 5 : Créer la classe Guerrier

Il faut maintenant créer notre classe `Guerrier`. Ici, rien de bien nouveau avec la classe `Magicien`, faites juste attention à bien envoyer guerrier et non pas magicien par automatisme à la classe `Personnage` lorsque vous appelez son constructeur. Voici un rappel de ce que vous devez faire :

##### Propriétés

- Aucune. Se content d'appeler le constructeur de `Personnage`, en lui donnant en paramètres (pseudo, "guerrier", 350, 50). Donc vous l'aurez compris, pour initialiser un joueur, il faudra appeler le constructeur de la classe que nous voulons, et donner juste un pseudo. Le reste sera géré par la classe choisie (magicien ou guerrier).

##### Méthodes :

- `attaquer(personnage)` - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, et affiche "[pseudo] attaque [personnage.pseudo] avec son épée ([attaque] dégâts)". Ensuite, appelle la fonction `evoluer()`. Puis, appelle la fonction `verifierSante()` du personnage adverse.

- `coupSpecial(personnage)` - Prend en paramètre le personnage adverse (donc un objet). Réduit la santé du personnage adverse selon le nombre de dégâts que fait le personnage en cours, fois 5, et affiche "[pseudo] attaque avec son coup spécial haches de guerre [personnage.pseudo] ([attaque * 5] dégâts)". Ensuite, appelle la fonction `evoluer()`. Puis, appelle la fonction `verifierSante()` du personnage adverse.

#### Étape 6 : Initialiser nos personnages et les faire combattre

Dernière étape ! Félicitations, vous avez fait le plus dur.

- Maintenant, il suffit d'initialiser nos objets.

_Recommandations_ : Je vous recommande de définir un personnage comme ****magicien** et un autre comme ****guerrier**, vous pourrez ainsi voir le fruit de vos efforts récompensé en voyant toutes les subtilités que vous avez créé dans vos méthodes !

##### Voici mon plan de combat :

<pre><code>
var gandalf = new Magicien('Gandalf');<br/>
var thor    = new Guerrier('Thor');<br/>
console.log(thor.informations);<br/>
console.log(gandalf.informations);<br/>
gandalf.attaquer(thor);<br/>
console.log(thor.informations);<br/>
thor.attaquer(gandalf);<br/>
console.log(gandalf.informations);<br/>
gandalf.coupSpecial(thor);
</code></pre>