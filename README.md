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

- possibilité d'utiliser **CodeSandox** (`https://codesandbox.io/s/react-new`) en utilisant le modèle fourni sur la documentation de React pour tester **React** sans rien installer
- Utilisation de **Node JS** pour travailler en local :
  - [Create React App](https://create-react-app.dev/)
    - applicatiob JavaScript : `npx create-react-app my-app`
    - application TypeScript : `npx create-react-app my-app --template typescript`
    - démarrage de l'application : `npm start`, URL : `http://localhost:3000/`
  - [Vite](https://vitejs.dev/) : `npm create vite@latest`

Installation de l'extension **React Dev Tools**

## La syntaxe JSX

- JSX (**JavaScript Syntax Extension**) est une extension React de la syntaxe du langage JavaScript
- JSX représente la structure HTML à injecter dans le code

Particularités :
- les attributs sont écrit en **camelCase** sauf pour les attributs commençant par `data-` et `aria-`
- l'attribut `class` s'écrit `className`, pour éviter un conflit avec le mot clé `class` en JS
- l'attribut `for` s'écrit `htmlFor`, pour éviter un conflit avec le mot clé `for` en JS
- l'attribut `style` s'écrit sous forme d'objet avec les propriétés CSS écrites en **camelCase**  
Exemple : `<div style={{width: 50, backgroundColor: 'red'}} />`

Une fonction ne peut renvoyer qu'**un seul noeud JSX racine**. Possibilité d'utiliser un **fragment** si on ne souhaite pas ajouter d'élément HTML (`<>` anciennenement `<Fragment>`)

```js
function App(){
  return <>
        <p>Premier paragraphe</p>
        <p>Second paragraphe</p>
    </>
}
```

### Interpoler les variables

- afficher le contenu de variables dans le code HTML avec les accolades

```js
function App() {
  const prenom = "Gaëtan";
  return <p>Je m'appelle {prenom}</p>;
}
```

### Affichage conditionnel

- Une chaine de caractères vide, une valeur `null`, `undefined` ou `false` font échouer la condition

```js
function App() {
  const condition = "bip";
  return (
    <>
      {condition && <p>C'est OK</p>}
      {condition ? <p>Condition OK</p> : <p>Condition pas OK</p>}
    </>
  );
}
```

### Affichage de tableaux

- utilisation de la méthode `map()` des tableaux pour créer plusieurs composants enfants
- il faut ajouter un attribut `key` (identifiant unique), que React utilise pour comprendre les changements dans les données

```js
function App() {
  const products = [
    { title: "Chou", id: 1 },
    { title: "Ail", id: 2 },
    { title: "Pomme", id: 3 }
  ];
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}
```

### Ecouteur d'évènement
- JSX permet de brancher des écouteurs d'événements sur nos éléments HTML à travers des attributs commençant par `on`, qui aura en paramètre une fonction qui sera exécutée lorsque l'événement est déclenché
- il ne faut pas mettre les parenthèses à la fonction dans l'événement, sinon elle est appelée directement !
- possibilité de récupérer l'événement et de le manipuler. Il s'agit d'un événement React et non de l'événement natif du navigateur, avec les mêmes possibilités

```js
function MyButton() {
  const handleClick = (e) => {
    alert("Vous avez cliqué !");
  };
  return <button onClick={handleClick}>Cliquez ici</button>;
}
```

### Une fonction = Un composant
- avec React, on parle de **composant**, qui est décrit sous la forme d'une fonction
- ce découpage permet d'éviter la répétition et permet d'avoir des composants réutilisables
- la fonction reçoit les attributs sous forme d'objet et renvoie du JSX
- la propriété `children` est un peu différente, elle correspond à l'élément entre les balises

```js
function Title ({color, children}) {
    return <h1 style={{color: color}}>{children}</h1>
}

export function App () {
    return <Title color="red">Mon super titre</Title>
}
```

### Le fichier main
- `ReactDOM` permet de brancher React au DOM
- il faut préciser dans la fonction `createRoot` l'élément HTML auquel on va brancher notre noeud React, ici l'élément **root** dans le fichier `index.html` qui correspond à une `div` vide
- la fonction `render()` permet de préciser quel noeud React il faut afficher
- la balise `<React.StrictMode>` est une balise qui rend 2 fois les composants pour mettre en évidence des problèmes potentiels dans l'application
  - fonctionne uniquement en mode développement, n'impacte pas la version de production

```js
import React from 'react'
import React from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

## Mettre à jour l’affichage avec le hook useState

- possibilité de gérer un état (mémoire interne d'un composant) qui est utilisé dans le rendu JSX avec `useState`
- `useState` renvoie 2 choses, l'état courant et la fonction pour le mettre à jour : `[something, setSomething]`
- lorsqu'on modifie l'état, React met automatiquement à jour l'affichage

```js
import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return <button onClick={handleClick}>Cliqué {count} fois</button>;
}
export default function MyApp() {
  return (
    <div>
      <h1>Des compteurs indépendants</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}
```

Il ne faut pas modifier un objet mais en créer un nouveau, sinon React ne fera pas de re-rendu

```js
function MyButton() {
  const [person, setPerson] = useState({
    prenom: "John",
    age: 12
  });
  const handleClick = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  return (
    <>
      <p>Age de {person.prenom} : {person.age}</p>
      <button onClick={handleClick}>Augmenter l'âge de 1</button>
    </>
  );
}
```

### Partager des données entre composants

- il est possible de faire descendre de l'information aux composants enfants via les **props**
- il est possible de faire remonter l'état d'un composant pour le partager entre composants. En déplaçant l’état vers le haut, nos composants peuvent le partager
- dans l'exemple ci-dessous :
  - la prop `onClick` de chaque bouton utilise la fonction `handleClick` issue de `MyApp`, c’est donc ce code-là qui s’exécute et incrémenter `count`
  - la nouvelle valeur count est passée comme prop à chaque bouton, de sorte qu’ils affichent tous cette nouvelle valeur

```js
const MyButton = ({ count, onClick }) => {
  return <button onClick={onClick}>Cliqué {count} fois</button>;
};

export default function MyApp() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Des compteurs synchronisés</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
```

## Les formulaires avec React

- création d'un champ **controlé**, React controle le le champ, mise à jour de la valeur dès que la valeur est modifiée (via un re-render)
- il n'est pas possible de mettre une valeur `undefined`, plutôt mettre une chaine de caractères vide

```js
export function App() {
  const [value, setValue] = useState("Toto");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form>
      <input name="firstname" value={value} onChange={handleChange} />
    </form>
  );
}
```

- possibilité d'utilisé un champ **non controlé**, React nous laisse gérer le champ comme on le souhaite (pas de re-render)
- possibilité d'ajouter une propriété `defaultValue` pour spécifier la valeur initiale, et un `onChange` si nécessaire

```js
export function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target).get("firstname")); // valeur du champ firstname
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="firstname" defaultValue="Toto" />
      <button>Envoyer</button>
    </form>
  );
}
```

## Le hook useEffect

- permet de générer des effets de bord lorsque certaines propriétés ou états des composants changent
- sert en général à la synchronisation avec des systèmes extérieurs
- fonction qui prend 2 paramètres
  - une fonction qui sera appelé lorsqu'une dépandence change
  - un tableau de dépendances, ce qui permet d'appeler le code seulement dans certaines conditions et pas tout le temps (à chaque re-rendu)

```js
import { useEffect } from 'react';

useEffect(() => {
  // s’exécute après chaque rendu
});

useEffect(() => {
  // s’exécute uniquement au montage (apparition du composant)
}, []);

useEffect(() => {
  return () => {
    // s'exécute au démontage du composant
  };
}, []);

useEffect(() => {
  // s’exécute au montage *mais aussi* si a ou b changent depuis le rendu précédent
}, [a, b]);
```

## Mettre en cache des données avec useMemo

- `useMemo` permet de mettre en cache le résultat d’un calcul d’un rendu à l’autre
- fonction qui prend 2 arguments, comme `useEffect`, une fonction de calcul, et une liste de dépendances

Exemple :
- lors du rendu initial, la valeur renvoyée par `useMemo` sera le résultat de l’appel au calcul
- lors des rendus suivants, React comparera les dépendances avec celles passées lors du rendu précédent. Si aucune dépendance n’a changé, `useMemo` continuera à utiliser la même valeur déjà calculée

```js
import { useMemo } from 'react';

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

**Vous ne devriez recourir à useMemo que pour optimiser les performances**

## Le hook useRef

- permet d'avoir un objet unique, qui a une clé courante, **current**, dans laquelle on peut assigner une valeur
- permet de sauvegarder la référence d'un élément HTML
- possibilité de modifier la valeur d'une référence sans faire de re-rendu


## Créer un hook personnalisé

- permet de créer des fonctions réutilisables pour limiter la répétition, en se basant sur les hooks existants, et alléger le code des composants

Hook permettant de passer une valeur de true à false
```js
function useToggle(initial = false){
  const [state, setState] = useState(initial)
  // fonction qui permet de changer l'état
  const toggle = () => setState(v => !v)
  return [state, toggle]
}

function App(){
  const [checked, toggleCheck] = useToggle()
  return <input type="checkbox" checked={checked} onChange={toggleCheck}/>
}
```

Hook permettant d'incrémenter ou décrémenter une valeur
```js

export function useIncrement ({base = 0, max = Infinity, min = -Infinity}) {
    const [state, setState] = useState(base)
    return {
        count: state,
        increment: () => setState(v => v < max ? v+1 : v),
        decrement: () => setState(v => v > min ? v-1 : v)
    }
}

function App(){
  const {count, decrement, increment} = useIncrement({base: 0, min: 0, max: 10})
  return <div>
      Compteur {count}
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
  </div>
}
```

Hook permettant de modifier le titre de la page
```js
export function useDocumentTitle (title) {
    // mise en mémoire du titre original pour le réinitialiser si le composant est démonté
    const titleRef = useRef(document.title)
    useEffect(() => {
        return () => {
            document.title = titleRef.current
        }
    }, []);
    useEffect(() => {
        document.title = title
    }, [title]);
}
function App(){
  useDocumentTitle("Titre de ma page")
  return <div>...</div>
}
```

Hook permettant de récupérer des données auprès d'une API
```js
export function useFetch (url, options ={}) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json; charset=UTF-8',
        ...options.headers,
      }
    })
    .then(r => r.json())
    .then(data => setData(data))
    .catch(e => setErrors(e))
    .finally(() => setLoading(false))
  }, [])

  return {loading, data, errors}
}

function App(){
  const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/users')
  return <>
  {loading && <div>Chargement en cours</div>}
  {errors && <div>{errors.toString()}</div>}
  {data && <ul>{data.map(user => <li key={user.id}>{user.name}</li>)}</ul>}
  </>
}
```

Il existe des librairies de hooks personnalisés, qui permet par exemple d'avoir un hook **useFetch**, comme `https://usehooks-ts.com/`


## Mémoisation et useCallback

- un composant est rendu (exécuté) à chaque fois que son état change ou lorsqu'on composant parent est re-rendu
- cela peut entrainer des problèmes de performances si un composant a une logique de rendu complexe
- pour éviter de rendre systématiquement un composant, on peut utiliser la fonction `memo()` qui fera en sorte qu'il n'y ait un re-rendu que s'il y a des propriétés qui changent

 ```js
 const MonComposant = memo((props) => {
    return <div>
        Je suis un composant couteux
    </div>
})
 ```

- lorsqu'on donne une fonction en paramètre, il faut l'entourer de `useCallback`, car elle est redéclarée à chaque fois que le composant `Demo` est exécuté, et donc fait un nouveau rendu
- `useCallback()` est simplement un `useMemo()` spécifiquement conçu pour les fonctions
- il faut mettre les variables éventuelles de la fonction dans le tableau des dépendances

```js
function Demo () {
    const handleClick = useCallback(() => console.log('ceci est un clic'), [])

    return <div>
        <MonComposant onClick={handleClick} />
    </div>
}
```

Comme pour **useMemo**, à n'utiliser que pour optimiser les performances, après avoir tenté de réorganiser les composants pour limiter les re-rendus.


## Les portails dans React

## Capturer les erreurs avec ErrorBoundary

## Chargement asynchrone via lazy()

## Le hook useReducer

## Le hook useContext

## Tester du code react

## Propriétés de rendu

## React router dom

## Animer avec framer motion

## Découverte de react-query



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