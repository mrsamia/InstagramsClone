import React from 'react';
import Button from './Button';
import Input from './Input';

function Form(props) {
    return (
        <div className='container'>
            <div className='formWrapper'>
                <div className='imgWrapper'>
                    <img src={require('../images/instagramLogo.png')} />
                </div>
                <Input name="fname" placeholder='Phone number, username, or email' />
                <Input name="password" placeholder='Password' />
                <Button name="Log In" className="loginBtn" />
                <div className='or-section'>OR</div>
            </div>
        </div>
    );
}

export default Form;