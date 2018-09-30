import React, {Component} from 'react';

//  le HOC entoure le composant normal et fournit des données supplémentaires
var newData = {
  data:'data from HOC'
}

// myHOC est une fonction d'ordre plus élevé qui est utilisé pour transmettre les données à MyComponent
// Elle prend MyComponent en argument et va changer avec newData et retourne le composant à l'écran
var myHOC = ComponentH => class extends Component{
  componentDidMount(){
    this.setState({data:newData.data})
  }

  render(){
    return <ComponentH  {...this.props} {...this.state}/>
  }
}

export default myHOC(MyComponent);


// si on exécute l'application, les données sont passées à MyComponent
class MyComponent extends Component{

  render(){
    return (
      <div>
        <h1>{this.props.data}</h1>
      </div>
    )
  }
}
