import React from 'react';
import Button from './Button';
import Input from './Input';
import GetTheApp from '../GetTheApp';
import DontHaveAccnt, { SignUpPageData } from '../DontHaveAccnt';
import OR from '../OR';
import DwnldAppBtn from '../DwnldAppBtn';
import InstagramLogo from '../InstagramLogo';
import LogInWithFacebook from '../LogInWithFacebook';

function Form(props) {
    return (
        <div className='container'>
            <div className='formWrapper '>
                <InstagramLogo />
                <Input name="fname" placeholder='Phone number, username, or email' />
                <Input name="password" placeholder='Password' />
                <Button name="Log In" className="loginBtn" />
                <OR />
                <LogInWithFacebook/>
                <div className='forgotSection'>
                    <p className='forgotText'>Forgot password?</p>
                </div>
            </div>
            <div>
                <DontHaveAccnt className='signUP' variant="LOGIN" />
                <GetTheApp />
                <DwnldAppBtn />
            </div>
        </div>
    );
}

export default Form;