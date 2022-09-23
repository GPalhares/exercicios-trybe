import React from 'react';

class TextArea extends React.Component {
    render(){
        const {value, handleChange} = this.props
        return(
            <label>
            TextArea<textarea value={value} onChange={handleChange} name='textArea' type='text'></textarea>
          </label>
        )
    }

 
  }

  export default TextArea;