import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';

ReactDOM.render(<App/>, document.getElementById('myApp'));

//setTimeout(()=> {ReactDOM.unmountComponentAtNode(document.getElementById('myApp'))},3000) // permet de vider la page au bout de 3 secondes
