import React from 'react';

class EmailArea extends React.Component {
    render(){
        const {value, handleChange} = this.props
        return(
            <label>
            EmailArea<input value={value} onChange={handleChange} name='emailArea' type='text'></input>
          </label>
        )
    }

 
  }

  export default EmailArea;