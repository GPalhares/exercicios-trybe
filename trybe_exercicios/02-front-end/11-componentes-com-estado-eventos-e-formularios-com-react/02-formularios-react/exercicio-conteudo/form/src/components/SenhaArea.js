import React from 'react';

class SenhaArea extends React.Component {
    render(){
        const {value, handleChange} = this.props
        return(
            <label>
            SenhaArea<input value={value} onChange={handleChange} name='senhaArea' type='password'></input>
          </label>
        )
    }

 
  }

  export default SenhaArea;