import React, {Component} from 'react';
import MyButton from './MyButton';
import SearchBar from './SearchBar';
import ComponentState from './exemples/ComponentState.jsx';
import ComponentProps from './exemples/ComponentProps.jsx';
import ComponentStateAndProps from './exemples/ComponentStateAndProps.jsx';
import ComponentPropTypes from './exemples/ComponentPropTypes.jsx';
import ComponentSetState from './exemples/ComponentSetState.jsx';
import ComponentDomNode from './exemples/ComponentDomNode.jsx';
import ComponentForm from './exemples/ComponentForm.jsx';
import ComponentForm2 from './exemples/ComponentForm2.jsx';
import ComponentRef from './exemples/ComponentRef.jsx';
import ComponentKey from './exemples/ComponentKey.jsx';
import ComponentRouter from './exemples/ComponentRouter.jsx';
import ComponentCycleDeVie from './exemples/ComponentCycleDeVie.jsx';
import ComponentHoc from './exemples/ComponentHoc.jsx';

class App extends Component {

  render(){
    return(
      <div>
        <p>Bienvenue à la Formation React !</p>
        <p>
          <MyButton text="Cliquez ici" color="primary"/>
          <MyButton text="ou ici" color="secondary"/>
          <MyButton text="un encore ici" color="default"/>
        </p>
        <SearchBar/>

        <h2>Les states</h2>
        <ComponentState/>
        <h2>Les props</h2>
        // avec les props par défaut
        <ComponentProps/>
        // en surchargeant les props
        <ComponentProps titre1="mon Titre 1" titre2="mon Titre 2"/>
        <h2>Les states et les props combinés</h2>
        <ComponentStateAndProps/>
        <h2>Les propTypes pour contrôler le type des props : warning si le type n'est pas respecté</h2>
        <ComponentPropTypes/>
        <h2>Les setState</h2>
        <ComponentSetState/>
        <h2>Trouver le noeud DOM</h2>
        <ComponentDomNode/>
        <h2>Les formulaires</h2>
        <ComponentForm/>
        <ComponentForm2/>
        <h2>Les ref avec React</h2>
        <ComponentRef/>
        <h2>Les key avec React</h2>
        <ComponentKey/>
        <h2>Les routeurs</h2>
        <ComponentRouter/>
        <h2>Les cycles de vie</h2>
        <ComponentCycleDeVie/>
        <h2>Les HOC</h2>
        <myHOC/>
      </div>
    )
  }
}

export default App;
