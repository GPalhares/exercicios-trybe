import React from 'react';

class CheckBoxArea extends React.Component {
    render(){
        const {value, handleChange} = this.props
        return(
            <label>
            CheckBoxArea<input value={value} onChange={handleChange} name='checkBox' type='checkbox'></input>
          </label>
        )
    }

 
  }

  export default CheckBoxArea;