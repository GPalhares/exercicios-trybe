import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
    };
  }
  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
     if(this.state.numeroDeCliques % 2 === 0){
      console.log('par')
     }

  };
  
  render() {

    const { numeroDeCliques } = this.state;
    return (
      <div>
      <button type='button' onClick={this.handleClick}>
        {numeroDeCliques}
      </button>
      <button type='button' onClick={this.handleClick}>
        {numeroDeCliques}
      </button>
      <button type='button' onClick={this.handleClick}>
        {numeroDeCliques}
      </button>
      </div>
      
    );
  }
}
export default App;
