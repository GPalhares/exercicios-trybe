import React from 'react';
import './App.css';
import CheckBoxArea from './components/CheckBoxArea';
import EmailArea from './components/EmailArea';
import SenhaArea from './components/SenhaArea';
import TextArea from './components/TextArea';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      textArea: '',
      emailArea: '' ,
      senhaArea: '' ,
      checkBox: false 
    }
  }

  handlerAll = ({target})=>{
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
     <TextArea value={this.state.textArea} handleChange={this.handlerAll}></TextArea>
     <EmailArea value={this.state.emailArea} handleChange={this.handlerAll}></EmailArea>
     <SenhaArea value={this.state.senhaArea} handleChange={this.handlerAll}></SenhaArea>
     <CheckBoxArea value={this.state.checkBox} handleChange={this.handlerAll}></CheckBoxArea>

      </>
    );
  }
}

export default App;
