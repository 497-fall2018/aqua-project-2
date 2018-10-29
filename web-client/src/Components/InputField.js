import React from 'react';
import '../styles/InputField.css';
import '../styles/FormContainer.css';

const InputField = props => (
  <div>
    <div> {props.description} </div>
    <input
      name={props.Name}
      value={props.Value}
      onChange={props.onchange}
      placeholder={props.placeholder}
      type={props.type}
      // className ="form-control" type={props.type}
      className={props.className}
    />
  </div>
);

export default InputField;
