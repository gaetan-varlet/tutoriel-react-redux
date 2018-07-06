# Formation ES6-React-Redux

Formateur : Aymen Harbaoui


## JavaScript

- langage de script, multiplateforme et orienté objet, traité lors de l'exécution
- En juin 2015, l'ECMAScript 2015 (ES6) est validé et publié par Ecman International. ES6 inclut de nouvelles fonctionnalités (arrows, classes, modules...)
- transpilation de l'ES6 en ES5 avec Babel
- nouveautés de l'ES6 : les classes, les chaînes de caractères sur plusieurs lignes
- les types de déclaration : *var* (déclaration de variable avec initialisation de la valeur), *const* (déclaration de constante en lecture seule), *let* (déclaration de variable dont la portée est celle du bloc courant en initialisant sa valeur)


### Les classes

Exemple de classe en ES6
 ```js
 class Humain{
   constructor(nom){
     this.nom = nom;
   }
   toString(){
     return "Je m'appelle "+this.nom;
   }
 }

 class Personne extends Humain{
   constructor(nom, age){
     super(nom);
     this.age=age;
   }
   toString(){
     return super.toString() +", mon âge est "+this.age;
   }
 }

var pers1 = new Humain("Jean");
var pers2 = new Personne("Guy", 34);
console.log(pers1.toString()); // Je m'appelle Jean
console.log(pers2.toString()); // Je m'appelle Guy, mon âge est 34
```

### Les SET et les MAP

SET est un type de données qui permet de stocker n'importe quelle valeur de façon unique.

```js
var marques = new Set();
marques.add("Renault");
marques.add("Peugeot");
```

MAP est un nouveau type de structure de données qui permet de stocker une clé et une valeur
```js
var marques = new Map();
marques.set("renault","clio");
console.log(marques);
marques.set("citroen","c4");
console.log(marques);
console.log(marques.size);
marques.forEach(function(val, key, Map){
  console.log(val+", "+key+", "+Map);
});
```

### Les modules

## React JS

- ReactJS est une bibliothèque open-source JavaScript développée par Facebook
- Objectif : faciliter la création d'une Single Page Application (SPA) via des composants dependant d'un état et générant du HTML à chacun de ses changements, les vues changent constamment
- ReactJS dispose d'un DOM virtuel. Les opérateurs de mise à jour sont faites directement sur le DOM chargé en mémoire et appliqué d'une manière différentielle puis appliqué sur le DOM physique, ce qui permet un gain de performance notable

## Flux

- architecture pour React, pour répondre aux limites de MVC
- transmission de données unidirectionnelle
- des composants qui ont chacun une responsabilité identifiée
- **Redux** se présente comme un système de centralisation des données et des actions. Il perme de mettre en place le **design patter Flux**



## Material UI
- https://material-ui.com/
- https://marmelab.com/react-admin-demo
- https://marmelab.com/react-admin/
- https://github.com/marmelab/react-admin

## React-Redux
- https://www.baptiste-donaux.fr/react-redux-concept/
