# React Redux

## Introduction

**React** est une librairie JS développée pour créer des applications modulaires et optimisées dans une seule page. **Flux** est un pattern de gestion des données. **Redux** est une implémentation qui permet de gérer l'état d'une application. React et Redux sont souvent utilisés ensemble.  
Il y a des concurrents à **React**, notamment **Angular** développé par Google, ou encore **VueJS**.

**Node JS** permet de compiler le projet. **NPM** pour *node package manager* est le gestionnaire de paquet pour installer les dépendances, il scanne le fichier *package.json*. `npm install` permet d'installer les dépendances du projet. `npm start` permet de compiler et démarrer le projet en local. Enfin, `npm run build` permet de créer un livrable.  
**Yarn** est un équivalent de *npm* en plus puissant, notamment pour la gestion du cache.

Le projet contient les librairies et le code qui est organisé en différents fichiers JS : des composants et des conteneurs. Le code est écrit en JSX (Javascript XML) et en ES6 (Javascript moderne qui permet d'avoir du code plus lisible). L'ES6 n'est pas encore compris par tous les navigateurs, il faut donc transpiler grâce à **Babel** le JSX et l'ES6 en ES5 qui est bien compris par les navigateurs. En sorti de la compilation, on a 3 fichiers utilisés par le navigateur : *index.html*, *style.css* et *bundle.js*


## Un premier exemple

Un fichier *index.html* à la racine du projetet un fichier *index.js* dans un dossier *src*.
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <div class="container"></div>
  </body>
  <script src="/bundle.js"></script>
</html>
```

```js
import React from 'react' // import de React pour l'utiliser dans le fichier
import ReactDOM from 'react-dom'

const App = function(){
  return <div>Hello World</div>
}

ReactDOM.render(<App/>, document.querySelector('.container'));
// render() est la fonction de base de React pour affichier du contenu à l'écran
// <App/> permet de passer une instance de App à render
// document.querySelector() permet d'insérer dans le DOM notre instance de App
```


La notion de composant
