import React, { Component } from 'react';
import './App.css';
import Contanier from './components/contanier';
import Fasebook from './components/fasebook';

class App extends Component {
  state = {
    name: "asmaa",
    picture: "https://png.pngtree.com/element_origin_min_pic/17/03/22/69f2ade6f76583a36167bc613e68cfaa.jpg"
  }

  handlerData = (dataOfFb) => {
    this.setState({ name: dataOfFb.name, picture: dataOfFb.picture  })
  }
  
  render() {
    return (
      <div className="App">
        
        {<Contanier picture={this.state.picture} name={this.state.name} />}
      </div>
    );
  }
}

export default App;
