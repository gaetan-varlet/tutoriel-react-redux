# React Admin

React Admin est un framework frontend pour construire des applications tournant dans le navigateur en appelant des API REST ou GraphQL, en utilisant ES6, React et Material Design. Elle s'appelait précédemment *admin-on-rest*. *React Admin* est open source et maintenu par *marmelab*.

- démonstration de l'application : https://marmelab.com/react-admin-demo
- tutoriel : https://marmelab.com/react-admin/
- dépôt GitHub : https://github.com/marmelab/react-admin

## Mise en place

Il faut créer une application avec `create-react-app` et installer le package `react-admon`
```bash
npm install -g create-react-app
create-react-app test-admin
cd test-admin/
yarn add react-admin prop-types
yarn start
```

Utilisation de l'API JSONPlacehlder. Exemple avec l'affichage du post 12 :
```bash
curl http://jsonplaceholder.typicode.com/posts/12
```
```
{
  "id": 12,
  "title": "in quibusdam tempore odit est dolorem",
  "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
  "userId": 2
}
```

```js
// in src/App.js
import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList } from './posts';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
  </Admin>
);

export default App;
```

Le composant `App` contient un composent `Admin` qui est le composant racine d'une application react-admin. Ce composent attend une props dataProvider, une fonction capable de récupérer des données d'une API. Nous allons utiliser pour le moment le fournisseur de données `ra-data-json-server` (`npm install ra-data-json-server`) qui est compatible avec JSONPlaceholder.

Le composant `<Admin>` attend un ou plusieurs composant enfant `<Resource>`. Chaque composant `<Resource>` mappe un nom avec un "endpoint" de l'API. La ligne `<Resource name="posts" />` informe react-admin de récupérer les “posts” à l'URL http://jsonplaceholder.typicode.com/posts

`<Resource>` définit également les composants React à utiliser pour chaque opération CRUD (list, create, edit, and show). La propriété `list = {PostList}` signifie que react-admin doit utiliser le composant `<PostList>` pour afficher la liste des articles.

```js
// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);
```

Le composant principal de la liste est le composant `<List>` chargé de récupérer les informations de l'API, d'afficher le titre de la page et de gérer la pagination.

 Cette liste délègue ensuite l'affichage de la liste des posts à son enfant, le composant `<Datagrid>` qui rend une table avec une ligne pour chaque enregistrement. Il utilise ses composants enfants (ici, une liste de `<TextField>`) pour déterminer les colonnes à rendre. Chaque composant Field mappe un champ différent dans la réponse de l'API, spécifiée par la prop source.

On peut voir dans l’onglet réseau du navigateur que l’application a récupéré l’URL http://jsonplaceholder.typicode.com/posts, puis a utilisé les résultats pour créer la grille de données.

## Les composants Field

On a vu le composant `<TextField>`. React-admin fournit d'autres composants Field pour mapper mapping différents types de variables : number, date, image, HTML, array, reference, etc...

Par exemple, l'enpoint `/users` contient un email :
```
{
  "id": 2,
  "name": "Ervin Howell",
  "username": "Antonette",
  "email": "Shanna@melissa.tv",
}
```

Ajoutons la ressource *users* dans App.js
```js
import { UserList } from './users';

<Resource name="users" list={UserList} />
```
```js
// in src/users.js
import React from 'react';
import { List, Datagrid, EmailField, TextField } from 'react-admin';

export const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);
```

