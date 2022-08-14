import React from 'react';
import Button from './Button';
import Input from './Input';
import { FaFacebookSquare } from "react-icons/fa";
import Footer from '../Footer/Footer';

function Form(props) {
    return (
        <div className='container'>
            <div className='formWrapper '>
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
            <div>
            <div className='formWrapper '>
                <span className='DontHaveAccnt'>Don't have an account?</span><a><span className='signUP'>Sign Up</span></a>
            </div>
            <div>
                <p className='GetTheApp'>Get the app.</p>
            </div>

            <div className='Img'>
                <img className='StoreImg' src={require('../images/apple.png')} />
                <img className='StoreImg' src={require('../images/google.png')} />
            </div>
            </div>
            <div>
                <Footer/>
            </div>

        </div>
    );
}

export default Form;