import React from 'react';
import Button from './Button';
import Input from './Input';
import { FaFacebookSquare } from "react-icons/fa";

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
                <div className='F-section'>
                    <FaFacebookSquare className='fa' /> <span className='LogInWithFacebook'>Log in with Facebook</span>
                </div>
                <div className='forgotSection'>
                    <p className='forgotText'>Forgot password?</p>
                </div>
            </div>
            <div className='formWrapper'>
                <p className='DontHaveAccnt'>Don't have an account?</p>
            </div>
        </div>
    );
}

export default Form;