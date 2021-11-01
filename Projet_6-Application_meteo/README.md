## Projet #6 - Une application météo

### Objectif

Dans ce projet, nous allons réaliser une application météo qui donnera la météo de n'importe quelle ville dans le monde.
Ce projet nous permettra de faire des requêtes AJAX et d'apprendre à utiliser correctement les API des sites internet avec JavaScript.

### Instructions

#### Étape 1 : Comprendre le fonctionnement de l'API

Dans cette première étape, la première chose qu'un bon développeur doit faire, c'est comprendre le fonctionnement de l'API qu'il va utiliser.
Dans ce projet, nous allons récupérer la météo grâce à l'API de OpenWeatherMap. Et plus particulièrement, grâce à l'API qui permet de [récupérer la météo actuelle](https://openweathermap.org/current "API d'OpenWeatherMap").

- **Pour utiliser cette API, vous devez vous inscrire gratuitement.**
- Une fois que vous êtes inscrit, vous pouvez aller [sur cette page](https://home.openweathermap.org/api_keys "Récupérez votre clé secrète") pour récupérer votre clé secrète, elle vous sera utile pour la prochaine étape.

Pour utiliser l'API de OpenWeatherMap, il va falloir utiliser l'url suivante :

`https://api.openweathermap.org/data/2.5/weather?q=saint-saulve&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`

Comme vous pouvez le constater, nous avons plusieurs paramètres :

- `q` - pour spécifier la ville (ici la merveilleuse ville de Saint-Saulve)

- `appid` - pour spécifier votre clé secrète (la mienne ne l'est plus désormais !)

- `units` - pour spécifier que nous voulons la température en Celsius

#### Étape 2 : Construire la requête AJAX

Nous allons maintenant construire notre requête AJAX ! Je ne vais vous aider que pour un seul point : 
- intégrer la ville que vous souhaitez dans l'url. Pour pouvoir intégrer la ville dont vous souhaitez la température dans l'url, je vous invite à faire comme ceci :

<pre><code>let ville = "Tokyo";

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';
</code></pre>

**Pensez bien évidemment à changer la valeur "appid" par votre clé secrète** :smile:

#### Étape 3 : Mettre à jour l'interface

Si vous êtes ici, c'est que vous avez réussi à récupérer et à afficher dans votre console la température de la ville que vous avez choisi ! Félicitations !

Dans cette étape, vous devrez mettre à jour votre interface. J'entends par là :

- Mettre à jour la température `#temperature_label`

- Mettre à jour la ville `#ville`

#### Étape 4 : Détecter le clic du bouton "Changer de ville"

Nous pouvons maintenant afficher la température de n'importe quelle ville du monde... enfin, presque. Car pour le moment, il faut modifier à chaque fois notre code. Ce serait beaucoup plus simple si nous pouvions utiliser le bouton "Changer de ville" pour afficher une boîte de dialogue à notre utilisateur, en lui proposant d'entrer le nom d'une ville, non ?

Vous devez pour ça :

- Sélectionner votre bouton `#changer`

- Ajouter un évènement pour qu'au clic, une boîte de dialogue s'affiche et sauvegarde la ville choisie par l'utilisateur dans une variable `villeChoisie`

Ne vous embêtez pas à vérifier si le nom de la ville existe vraiment, OpenWeatherMap est très bon de ce côté-là. Si la ville n'existe pas, l'API ne changera juste pas notre température. De plus, l'API prend directement en compte notre nom de ville, peu importe si elle a des majuscules ou non : OpenWeatherMap s'en charge ! Donc, demandez juste à votre utilisateur une ville.

