import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App.jsx';
import produitApp from './reducers/reducers'

let store = createStore(produitApp);
let rootElement = document.getElementById('myApp');
// le store est l'endroit qui détient l'état de l'application. Nous passons la propriété store à l'élément <Provider>. Ce dernier enveloppe notre composant <App/>
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
);
