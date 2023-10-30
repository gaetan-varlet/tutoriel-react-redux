# React Redux

## Introduction

- **React** est une librairie JavaSript, développée par Facebook, pour construire facilement des interfaces utilisateurs à partir de briques individuelles appelées composants
  - [Site de React](https://fr.react.dev/)
  - [Tutoriel Grafikart](https://grafikart.fr/formations/react)
- **Node JS** permet de compiler le projet
- **NPM** pour *node package manager* est le gestionnaire de paquet pour installer les dépendances, il scanne le fichier *package.json*
  - `npm install` permet d'installer les dépendances du projet
  - `npm start` permet de compiler et démarrer le projet en local
  - enfin, `npm run build` permet de créer un livrable

Le projet contient les librairies et le code qui est organisé en différents fichiers JS : des composants et des conteneurs.  
Le code est écrit en JSX (Javascript XML) et en ES6 (Javascript moderne qui permet d'avoir du code plus lisible).  
L'ES6 n'est pas encore compris par tous les navigateurs, il faut donc transpiler grâce à **Babel** le JSX et l'ES6 en ES5 qui est bien compris par les navigateurs.  
En sortie de la compilation, on a 3 fichiers utilisés par le navigateur : *index.html*, *style.css* et *bundle.js*

Il y a des concurrents à **React**, notamment **Angular** développé par Google, ou encore **VueJS**.

### Redux

- **Flux** est un pattern de gestion des données
- **Redux** est une implémentation qui permet de gérer l'état d'une application. React et Redux sont souvent utilisés ensemble

## Installation

- possibilité d'utiliser **CodeSandox** en utilisant le modèle fourni sur la documentation de React pour tester **React** sans rien installer
- Utilisation de **Node JS** pour travailler en local :
  - [Create React App](https://create-react-app.dev/) : `npx create-react-app my-app`
  - [Vite](https://vitejs.dev/) : `npm create vite@latest`

## Un premier exemple

Un fichier *index.html* à la racine du projet et un fichier *index.js* dans un dossier *src*
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
// render() est la fonction de base de React pour afficher du contenu à l'écran
// <App/> permet de passer une instance de App à render
// document.querySelector() permet d'insérer dans le DOM notre instance de App
```


## La notion de composant
- Dans React, tout est composant. Par exemple, une barre de recherche, une vidéo, une image avec une description. On peut les stocker dans un dossier *components* dans le dossier *src*. Les conteneurs contiennent des composants, on peut les stocker dans un dossier *containers*.
- Le premier fichier appelé lorsqu'on lance le projet est celui indiqué dans le main du fichier *package.json*, par exemple *index.js*
- pour pouvoir importer un composant, il faut l'exporter là ou il est créé avec par exemple la commande `export default App;`
- *index.js* doit avoir un seul travail qui est d'afficher *App* qui est un conteneur

```js
// app.js
import React from 'react'

const App = function(){
  return <div>Hello World</div>
}

export default App;

//index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/app'

ReactDOM.render(<App/>, document.querySelector('.container'));
```

## La notion de classe

On peut faire une classe, qui est un composant plus puissant, à la place d'une fonction que l'on stocke dans une constante
```js
import React, {Component} from 'react'

class SearchBar extends Component{
  render(){ // une des fonctions appelée dès que la classe est instanciée
    return <input/>
  }
}

export default SearchBar;
```

## Le state

Le state est créé au moment où la classe est instanciée, dans le constructeur.

```js
import React, {Component} from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props) // permet de recevoir des propriétés de composants parents
    // création du state en lui affectant une valeur
    this.state = {searchText:"",placeHolder:"Tapez votre film..."}
  }
  render(){
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder}/>
        // onChange est appelé à chaque modification de l'input
        // bind(this) permet de raccrocher le contexte de la classe dans la fonction handleChange : this de la classe est maintenant accessible dans la fonction handleChange
        // this.state.placeHolder permet de récupérer le placeHolder définit dans le state
        <p>{this.state.searchText}</p>
      </div>
    )
  }
  handleChange(event){
    // onChange envoie automatiquement en paramètre un événement de la fonction son événement
    this.setState({searchText:event.target.value})
    // this.state est immuable, ça écrase les objets, il faut donc utiliser setState
    // event.target.value permet d'accéder à la valeur de l'input
    // quand il y a une modification dans l'état, render() est automatiquement appelé, on peut donc afficher en live les modifications. React ne rafraîchit que ce qui change.
  }
}

export default SearchBar;
```

## Les props et map()

Les props ne sont pas modifiables, il faut passer par une autre variable pour le faire.

```js
import React from 'react'

const VideoListItem = (props) => {
    return <li>Un film recommandé : {props.movie}</li>
}
export default VideoListItem;
```

```js
import React from 'react'
import VideoListItem from '../component/video-list-item'

const VideoList = () => {
    const movies = ["film1","film2","film3"]
    return (
      <div>
          <ul>
            {
              movies.map(movie => {
                return <VideoListItem key={movie} movie={movie}/>
              })
              // map est une fonction qui permet de boucler sur un tableau, équivalent à :
              // <VideoListItem movie=(movies[0])/> <VideoListItem movie=(movies[1])/> <VideoListItem movie=(movies[2])/>
              // chaque enfant dans une map doit avoir une clé (key) unique comme propriété. On peut par exemple définir key={movie}
            }
          </ul>
      </div>
    );
}
export default VideoList;
```

## Les requêtes Ajax avec axios

Il faut commencer par installer axios avec la commande `npm install axios`

```js
// app.js
import React from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import axios from 'axios'
import VideoDetail from '../components/'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "hdiscover/movie?language=fr..."
const API_KEY = "api_key=eakkdfjfgifsdg..."

class App extends Component{
  constructor(propos){
    super(props)
    this.state={movieList:{}, currentMovie:{}}
  }
  componentWillMount(){ // fonction où l'on fait la requête Ajax (fonction appelée au moment où le composant est chargé)
    this.initMovies();
  }
  initMovies(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
    .then(function(response){
      this.setState({movieList:response.data.results.slice(1,6),
      currentMovie:response.date.result[0]});
      // slice garde les 5 premiers éléments du tableau
    }).bind(this);
  }

  render(){
    const renderVideoList = () => {
      if(this.state.movieList.length>=5){
        return <VideoList movieList={this.state.movieList}/>
      }
    }
    return (
      <div>
        <SearchBar/>
        {renderVideoList()}
        <VideoDetail title={this.state.currentMovie.title}
        description={this.state.currentMovie.overview} />
      </div>
    )  
  }
}

export default App:
```

```js
// video-detail.js
import React from 'react'

const VideoDetail = ({title, description}) => {
  return (
    <div>
      <h1>{title}<h1/>
      <p>{description}</p>
    <div/>
  )
}
export default VideoDetail;
```



## Mise en place d'une fausse API

Nous allons utiliser [JSON Server](https://github.com/typicode/json-server)
- installer *JSON Server* avec `npm install -g json-server` ou `sudo npm install -g json-server`
- créer un fichier `db.json` avec le contenu suivant :
```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
- lancer le serveur avec la commande `json-server --watch db.json` ou `sudo json-server --watch db.json`
- le serveur est accessible à l'URL `http://localhost:3000/`
- pour changer de port utiliser l'option `--port`, par exemple `sudo json-server --watch db.json --port 3004` puis accéder au serveur à l'URL `http://localhost:3004/`

Installer **Casual** avec `npm install casual`. Cela permet de générer des fausses données.
- créer un fichier `fillDB.js` qui va nous servir à remplir la base de données
```js
var casual = require('casual')

module.exports = () => {
    const data = { posts: [] }
    for (let i = 0; i < 25; i++) {
      data.posts.push({
        id: i, title: casual.title,
        content: casual.sentences(n=10),
        author: casual.name
      })
    }
    return data
  }
```
- exécuter *JSON Server* sur ce fichier : `sudo json-server --watch fillDB.js --port 3004`