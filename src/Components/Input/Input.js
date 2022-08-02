import React from 'react';
import '../component.css';

function Input(props) {
    return (
        <div className='inputWrapper'>
            <input type="text" className='formControl' name={props.name} placeholder={props.placeholder}></input><br></br>
        </div>
    );
}

export default Input;