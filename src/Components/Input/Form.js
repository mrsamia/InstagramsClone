import React from 'react';
import Button from './Button';
import Input from './Input';
import GetTheApp from '../GetTheApp';
import DontHaveAccnt from '../DontHaveAccnt';
import OR from '../OR';
import DwnldAppBtn from '../DwnldAppBtn';
import InstagramLogo from '../InstagramLogo';
import LogInWithFacebook from '../LogInWithFacebook';
import ForgotPass from '../ForgotPass';

function Form(props) {
    return (
        <div className='container'>
            <div className='formWrapper '>
                <InstagramLogo className="pb-4" />
                <Input name="fname" placeholder='Phone number, username, or email' />
                <Input name="password" placeholder='Password' />
                <Button name="Log In" className="loginBtn" />
                <OR />
                <LogInWithFacebook/>
                <ForgotPass/>
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